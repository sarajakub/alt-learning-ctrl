/*
 * Moon Phase Simulation (LunarPhasesAsset3)
 * Version: 1.1.0
 * Build: 2020-05-28
 * 
 * This simulation allows users to visualize and interact with moon phases.
 * It includes:
 * - Interactive orbit diagram with Earth and Moon
 * - Moon phase visualization
 * - Time controls (play/pause, forward/back by hours/days)
 * - Visual indicators for moonrise/moonset
 * - Configurable display options
 */

// Core configuration for the moon phase simulation
const MOON_SIM_CONFIG = {
    CALENDAR_PERIOD_IN_DAYS: 30,      // Length of calendar period
    SYNODIC_PERIOD_IN_DAYS: 29.5,     // Actual moon's synodic period (time between same moon phases)
    MIN_TRANSITION_DURATION_MS: 250,   // Minimum animation transition time
    MAX_TRANSITION_DURATION_MS: 1000,  // Maximum animation transition time
    SECONDS_PER_CALENDAR_PERIOD: 180,  // Real-time seconds per simulation period
    ASPECT_RATIO_THRESHOLD: 1.6        // Threshold for switching between landscape/portrait modes
};

// Asset paths for all visual elements used in the simulation
const ASSETS = {
    SUN: "LunarPhasesAsset3_v1-1-0/Boston2_v2-modified_sun.svg",
    SUN_GRADIENT: "LunarPhasesAsset3_v1-1-0/Boston2_v2-modified_sun-gradient.svg",
    TIME_TICKMARKS: "LunarPhasesAsset3_v1-1-0/time-tickmarks-2.svg",
    MOON: "LunarPhasesAsset3_v1-1-0/Boston2_v1_moon-fixed.svg",
    EARTH: "LunarPhasesAsset3_v1-1-0/Boston2_v6_earth-snowcap-fixed.svg",
    STICKFIGURE: "LunarPhasesAsset3_v1-1-0/Boston2_v5b-modified_stickfigure-extraextrawide.svg",
    PLAY_ICON: "LunarPhasesAsset3_v1-1-0/play-icons_v2_play.svg",
    PAUSE_ICON: "LunarPhasesAsset3_v1-1-0/play-icons_v2_pause.svg",
    DOUBLE_BACK: "LunarPhasesAsset3_v1-1-0/double-back-white.svg",
    BACK: "LunarPhasesAsset3_v1-1-0/back-white.svg",
    DOUBLE_FORWARD: "LunarPhasesAsset3_v1-1-0/double-forward-white.svg",
    FORWARD: "LunarPhasesAsset3_v1-1-0/forward-white.svg",
    FULL_MOON: "LunarPhasesAsset3_v1-1-0/fullmoon.png"
};

/**
 * TimeKeeper Class
 * Core simulation engine that handles all time-related calculations and state
 */
class TimeKeeper {
    constructor(config = {}) {
        // Initialize time-related constants
        this._ATU_PER_MINUTE = 60;
        this._ATU_PER_HOUR = 60 * this._ATU_PER_MINUTE;
        this._ATU_PER_DAY = 24 * this._ATU_PER_HOUR;
        
        // Set calendar and synodic periods
        this._CALENDAR_PERIOD = MOON_SIM_CONFIG.CALENDAR_PERIOD_IN_DAYS * this._ATU_PER_DAY;
        this._SYNODIC_PERIOD = Math.round(MOON_SIM_CONFIG.SYNODIC_PERIOD_IN_DAYS * this._ATU_PER_DAY);
        this._SYNODIC_OFFSET = 12 * this._ATU_PER_HOUR;
        this._TIME_CYCLE = this._SYNODIC_PERIOD * this._CALENDAR_PERIOD;

        // Initialize state variables
        this._changeCallback = null;
        this._secondsPerCalendarPeriod = MOON_SIM_CONFIG.SECONDS_PER_CALENDAR_PERIOD;
        this._hasTimeChanged = true;
        this._hasAnimationStateChanged = true;
        this._isPlaying = false;
        this._animFrameId = null;
        
        // Bind methods
        this._animFrameHandler = this._animFrameHandler.bind(this);
        
        // Set initial time
        this._setTime(0);
    }

    // Public Methods for time control and state management
    
    /**
     * Sets a callback function to be called when time changes
     */
    setChangeCallback(callback) {
        this._changeCallback = typeof callback === 'function' ? callback : null;
    }

    /**
     * Sets the speed of the simulation
     * Controls how many real seconds correspond to one calendar period
     */
    setSecondsPerCalendarPeriod(seconds) {
        if (!Number.isFinite(seconds)) {
            console.error("secondsPerCalendarPeriod must be a valid number.");
            return;
        }
        
        // Clamp value between 20 and 2000 seconds
        this._secondsPerCalendarPeriod = Math.max(20, Math.min(2000, seconds));
        this._recalcAnimPlayingParams();
    }

    /**
     * Resets the change flags used for tracking updates
     */
    clearFlags() {
        this._hasTimeChanged = false;
        this._hasAnimationStateChanged = false;
    }

    /**
     * Various getter methods for simulation state
     */
    getHasTimeChanged() {
        return this._hasTimeChanged;
    }

    getHasAnimationStateChanged() {
        return this._hasAnimationStateChanged;
    }

    getAnimationState() {
        if (this._animFrameId === null) return this.IDLE;
        return this._isPlaying ? this.PLAYING : this.TRANSITIONING;
    }

    getIsAnimating() {
        return this._animFrameId !== null;
    }

    /**
     * Returns the current time state including calendar day, moon phase, etc.
     */
    getTime() {
        return {
            calendarDay: this._calendarDay,
            fractionalTimeOfDay: this._fractionalTimeOfDay,
            moonPhase: this._moonPhase,
            hour: this._hour,
            minute: this._minute,
            opaqueTime: this._time,
            daysSinceNew: this._daysSinceNew,
            hoursSinceNew: this._hoursSinceNew
        };
    }

    // Private Methods

    /**
     * Updates the internal time state and calculates derived values
     */
    _setTime(time) {
        // Update internal time state
        this._time = time;
        
        // Calculate derived time values
        this._calendarDay = Math.floor(time / this._ATU_PER_DAY) + 1;
        this._fractionalTimeOfDay = (time % this._ATU_PER_DAY) / this._ATU_PER_DAY;
        this._hour = Math.floor(this._fractionalTimeOfDay * 24);
        this._minute = Math.floor((this._fractionalTimeOfDay * 24 - this._hour) * 60);
        
        // Calculate moon phase
        const synodicTime = (time + this._SYNODIC_OFFSET) % this._SYNODIC_PERIOD;
        this._moonPhase = synodicTime / this._SYNODIC_PERIOD;
        this._daysSinceNew = synodicTime / this._ATU_PER_DAY;
        this._hoursSinceNew = synodicTime / this._ATU_PER_HOUR;
        
        // Notify changes
        this._hasTimeChanged = true;
        if (this._changeCallback) this._changeCallback();
    }

    /**
     * Handles animation frame updates for smooth transitions
     */
    _animFrameHandler(timestamp) {
        if (!this._animStartTime) {
            this._animStartTime = timestamp;
        }
        
        const elapsed = timestamp - this._animStartTime;
        const progress = Math.min(elapsed / this._animDuration, 1);
        
        // Calculate new time based on animation progress
        const newTime = this._animStartTime + (this._animEndTime - this._animStartTime) * progress;
        this._setTime(newTime);
        
        if (progress < 1) {
            this._animFrameId = requestAnimationFrame(this._animFrameHandler);
        } else {
            this._animFrameId = null;
            if (this._isPlaying) {
                this._startAnimatedTransition(this._time + this._animStep, this._animDuration);
            }
        }
    }

    /**
     * Recalculates animation parameters when simulation speed changes
     */
    _recalcAnimPlayingParams() {
        const calendarPeriodInSeconds = this._secondsPerCalendarPeriod;
        this._animStep = this._ATU_PER_DAY / (calendarPeriodInSeconds * 60);
        this._animDuration = Math.min(
            Math.max(MOON_SIM_CONFIG.MIN_TRANSITION_DURATION_MS, calendarPeriodInSeconds * 10),
            MOON_SIM_CONFIG.MAX_TRANSITION_DURATION_MS
        );
    }
}

/**
 * OrbitDiagramElement Class
 * Base class for interactive elements in the orbit diagram (Earth and Moon)
 * Handles:
 * - Mouse/touch interaction
 * - Visual feedback (highlights, focus states)
 * - Drag behavior for time control
 */
class OrbitDiagramElement {
    constructor(orbitDiagram) {
        this._orbitDiagram = orbitDiagram;
        this.TYPE_MOUSE = "mouse";
        this.TYPE_TOUCH = "touch";
        this.TYPE_NONE = "none";
        
        // Visual configuration
        this._hintArcLength = 40;
        this._hintArcWidth = 8;
        this._hintArcFill = "white";
        this._hintArcStroke = "rgba(190, 190, 190, 1)";
        this._focusStroke = "white";
        this._focusStrokeWidth = 6;
        this._highlightFill = "rgba(255, 255, 255, 0.5)";
        
        // Interaction state
        this._isMouseOver = false;
        this._isFocused = false;
        this._dragType = this.TYPE_NONE;
        
        // Initialize SVG elements
        this._initializeSVGElements();
    }
    
    // ... Additional methods for handling interactions and rendering
}

/**
 * MoonElement Class
 * Represents the Moon in the orbit diagram
 * - Handles moon-specific rendering
 * - Manages moon phase visualization
 * - Controls moon movement along orbit
 */
class MoonElement extends OrbitDiagramElement {
    constructor(orbitDiagram) {
        super(orbitDiagram);
        this._DEFAULT_IMAGE_RADIUS = 14;
        this._initializeMoonElements();
    }
    
    // ... Moon-specific methods
}

/**
 * EarthElement Class
 * Represents the Earth in the orbit diagram
 * - Handles Earth rotation
 * - Manages stick figure visibility
 * - Controls Earth-Moon line visualization
 */
class EarthElement extends OrbitDiagramElement {
    constructor(orbitDiagram) {
        super(orbitDiagram);
        this._DEFAULT_IMAGE_RADIUS = 50;
        this._initializeEarthElements();
    }
    
    // ... Earth-specific methods
}

/**
 * OrbitDiagram Class
 * Main visualization component that shows the Earth-Moon system
 * - Manages the SVG canvas
 * - Coordinates Earth and Moon elements
 * - Handles layout and scaling
 */
class OrbitDiagram {
    constructor(timekeeper) {
        this._timekeeper = timekeeper;
        this._isDraggingAllowed = true;
        this._isDraggingInProgress = false;
        
        // Initialize visual elements
        this._initializeCanvas();
        this._initializeElements();
        
        // Setup layout parameters
        this._margin = 0.05;
        this._earthSize = 0.2;
        this._orbitWidth = 2;
        this._orbitColor = "rgb(180, 180, 180)";
        
        // Start update loop
        this.update();
    }
    
    // ... Orbit diagram methods
}

/**
 * ControlPanel Class
 * User interface component for controlling the simulation
 * 
 * Controls include:
 * 1. Time Navigation
 *    - Decrement/Increment Hour buttons
 *    - Decrement/Increment Day buttons
 *    - Play/Pause animation button
 * 
 * 2. Display Options
 *    - Show Time Tickmarks checkbox
 *    - Show Lunar Landmark checkbox
 *    - Show Moonrise/Moonset Line checkbox
 * 
 * 3. Information Display
 *    - Time since new Moon
 *    - Observer's current time
 */
class ControlPanel {
    constructor(simulation) {
        this._simulation = simulation;
        
        // Define button states
        this.MODE_ALL_DISABLED = 1;    // All controls disabled
        this.MODE_PAUSE_ENABLED = 2;   // Only pause button enabled during playback
        this.MODE_ALL_ENABLED = 3;     // All controls enabled when not playing
        
        // Initialize UI elements
        this._initializeControls();
        this._initializeReadouts();
        this._initializeOptions();
        
        // Setup event handlers
        this._setupEventListeners();
    }

    /**
     * Initializes all control buttons and their layouts
     * - Creates navigation buttons (hour/day increment/decrement)
     * - Creates play/pause button
     * - Organizes buttons into left, right, and top sections
     */
    _initializeControls() {
        // Create button container
        this._element = document.createElement("div");
        this._element.classList.add("wgbh-asset3-control-panel");

        // Create button sections
        const buttonSection = document.createElement("div");
        buttonSection.classList.add("wgbh-asset3-control-buttons");

        // Initialize navigation buttons
        this._initializeNavigationButtons();
        
        // Initialize play/pause controls
        this._initializePlaybackControls();
    }

    /**
     * Initializes time and phase information displays
     * - Time since new Moon readout
     * - Observer's current time readout
     */
    _initializeReadouts() {
        // Create time since new Moon readout
        this._timerReadout = new ReadoutDisplay();
        this._timerReadout.setLabel("Time since new Moon:");

        // Create observer's time readout
        this._timeOfDayReadout = new ReadoutDisplay();
        this._timeOfDayReadout.setLabel("Observer's current time:");
    }

    /**
     * Initializes display option checkboxes
     * - Time tickmarks toggle
     * - Lunar landmark toggle
     * - Moonrise/Moonset line toggle
     */
    _initializeOptions() {
        // Create options container
        const optionsSection = document.createElement("div");
        optionsSection.classList.add("wgbh-asset3-control-panel-section");

        // Initialize display toggles
        this._initializeDisplayToggles();
    }

    /**
     * Updates the control panel state based on simulation mode
     * @param {number} mode - The mode to set (ALL_DISABLED, PAUSE_ENABLED, or ALL_ENABLED)
     */
    setMode(mode) {
        switch(mode) {
            case this.MODE_ALL_DISABLED:
                // Disable all controls during transitions
                this._disableAllControls();
                break;
            case this.MODE_PAUSE_ENABLED:
                // Only enable pause during playback
                this._enablePauseOnly();
                break;
            case this.MODE_ALL_ENABLED:
                // Enable all controls when stopped
                this._enableAllControls();
                break;
            default:
                console.error("Invalid control panel mode");
        }
    }

    /**
     * Updates time displays with current simulation state
     * @param {Object} time - Current time state from TimeKeeper
     */
    updateWithTime(time) {
        this._timerReadout.setValue(this.getTimeSinceNewMoonString(time));
        this._timeOfDayReadout.setValue(this.getTimeAsDigitalTimeString(time));
    }

    // ... Additional control panel methods
}

/**
 * PhasePanel Class
 * Displays detailed moon phase information
 * - Shows current moon phase name
 * - Displays illumination percentage
 * - Renders moon phase visualization
 */
class PhasePanel {
    constructor(simulation) {
        this._simulation = simulation;
        
        // Initialize display elements
        this._initializePanel();
        this._initializeMoonPhaseImage();
        
        // Setup update handlers
        this._setupUpdateHandlers();
    }
    
    // ... Phase panel methods
}

/**
 * LunarPhasesAsset3 Class
 * Main simulation class that coordinates all components
 * - Initializes and connects all components
 * - Manages global state and configuration
 * - Handles window resizing and layout
 */
class LunarPhasesAsset3 {
    constructor() {
        // Initialize simulation engine
        this._timekeeper = new TimeKeeper({ synodicPeriodInDays: 29.5 });
        
        // Create main container
        this._element = document.createElement("div");
        this._element.classList.add("wgbh-asset3-root");
        
        // Initialize components
        this._initializeComponents();
        
        // Setup layout and events
        this._setupLayout();
        this._setupEventListeners();
        
        // Start simulation
        this.update();
    }
    
    // ... Main simulation methods
}

// Export the main simulation class
window.WGBH = window.WGBH || {};
window.WGBH.LunarPhasesAsset3 = LunarPhasesAsset3; 