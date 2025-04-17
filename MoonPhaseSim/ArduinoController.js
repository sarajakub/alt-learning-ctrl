/**
 * ArduinoController Class
 * Handles serial communication with Arduino to control the moon phase simulation
 * Supports rotary encoder input for Moon and Earth rotation
 */
class ArduinoController {
    constructor(simulation) {
        this._simulation = simulation;
        this._port = null;
        this._reader = null;
        this._writer = null;
        
        // Control state
        this._controllingEarth = false;
        this._isDragging = false;
        this._lastAngle = 0;
        this._rotationSensitivity = 0.1; // Adjust this to control rotation speed
        
        // Bind methods
        this.connect = this.connect.bind(this);
        this._handleSerialData = this._handleSerialData.bind(this);
    }

    /**
     * Connects to Arduino through Web Serial API
     */
    async connect() {
        try {
            // Request serial port access
            this._port = await navigator.serial.requestPort();
            await this._port.open({ baudRate: 9600 });

            // Set up serial reader
            const textDecoder = new TextDecoderStream();
            this._port.readable.pipeTo(textDecoder.writable);
            this._reader = textDecoder.readable.getReader();

            // Start reading loop
            this._readLoop();

            console.log('Successfully connected to Arduino');
        } catch (error) {
            console.error('Failed to connect to Arduino:', error);
        }
    }

    /**
     * Continuous loop to read serial data
     */
    async _readLoop() {
        try {
            while (true) {
                const { value, done } = await this._reader.read();
                if (done) {
                    break;
                }
    
                console.log("RAW serial value:", JSON.stringify(value)); // ✅ only in _readLoop
                this._handleSerialData(value.replace(/\r?\n|\r/g, '').trim());
            }
        } catch (error) {
            console.error('Error reading from Arduino:', error);
        }
    }

    /**
     * Handles incoming serial data and maps it to simulation controls
     * Commands:
     * - "M+/M-": Rotate Moon clockwise/counterclockwise
     * - "E+/E-": Rotate Earth clockwise/counterclockwise
     * - "CM": Switch to Moon control
     * - "CE": Switch to Earth control
     * - "P": Toggle play/pause
     * - "R": Reset to initial state
     * - "Sxxx": Set simulation speed (xxx is value between 020 and 999)
     */
    _handleSerialData(command) {
        console.log("Parsed command:", JSON.stringify(command)); // Shows newline/carriage returns
        console.log('Received command:', command);
        console.log("Dragging target:", this._simulation._orbitDiagram);
        console.log(window.WGBH.lunarPhasesAsset3);

        switch(command[0]) {
            case 'M': // Moon rotation
                // Use fractionalSynodicPeriods for Moon rotation
                const moonDelta = {
                    fractionalSynodicPeriods: command[1] === '+' ? -0.01 : 0.01,
                    doAnimation: false
                };
                this._simulation._timekeeper.setTimeByDelta(moonDelta);
                break;
                
            case 'E': // Earth rotation
                // Use fractionalDays for Earth rotation
                const earthDelta = {
                    fractionalDays: command[1] === '+' ? -0.003 : 0.003,
                    doAnimation: false
                };
                this._simulation._timekeeper.setTimeByDelta(earthDelta);
                break;
                
            case 'C': // Control mode change
                console.log('Control change command received:', command, 'Setting to Earth:', command[1] === 'E');
                this._controllingEarth = command[1] === 'E';
                this._updateControlModeUI();
                break;
                
            case 'P': // Play/Pause toggle
                if (this._simulation._timekeeper.getIsPlaying()) {
                    this._simulation.pause();
                } else {
                    this._simulation.play();
                }
                break;
                
            case 'R': // Reset
                this._simulation._timekeeper.setTime({ calendarDay: 1, fractionalTimeOfDay: 0.5 });
                break;
                
            case 'S': // Speed control
                const speed = parseInt(command.substring(1));
                if (!isNaN(speed) && speed >= 20 && speed <= 999) {
                    this._simulation._timekeeper.setSecondsPerCalendarPeriod(speed);
                }
                break;
        }
    }

    /**
     * Disconnects from the Arduino
     */
    async disconnect() {
        if (this._isDragging) {
            this._stopDragging();
        }
        
        if (this._reader) {
            await this._reader.cancel();
            this._reader = null;
        }
        
        if (this._port) {
            await this._port.close();
            this._port = null;
        }
    }
    /**
     * Updates the on-screen UI to show current control mode
     */
    _updateControlModeUI() {
        const display = document.getElementById('controlModeDisplay');
        if (display) {
            const newText = 'Controlling: ' + (this._controllingEarth ? 'Earth' : 'Moon');
            display.textContent = newText;
            display.style.display = 'none';  // Force DOM refresh
            display.style.display = 'block'; // Force DOM refresh
            console.log('Updated UI to:', newText); // Debug the update
        }
    }
}

// Export the controller
window.WGBH = window.WGBH || {};
window.WGBH.ArduinoController = ArduinoController; 