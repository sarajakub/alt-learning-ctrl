#include <Bounce.h>

// Joystick pins
const int joyXPin = A9;
const int joyYPin = A8;
const int buttonPin = 21;

// Calibration values
int centerX = 512, centerY = 512; // Auto-calibrated values

// Deadzone and sensitivity
const int deadzone = 20;
const float sensitivity = 0.03;

// Button debounce
Bounce button = Bounce(buttonPin, 10);
bool isDragging = false; // Track if the button is held for dragging

// Smoothing filter
const int smoothingFactor = 8; 
int joyXArray[smoothingFactor], joyYArray[smoothingFactor];
int indexical = 0;

// Auto-calibrate joystick center position
void calibrateJoystick() {
    long sumX = 0, sumY = 0;
    for (int i = 0; i < 100; i++) { // Take 100 readings
        sumX += analogRead(joyXPin);
        sumY += analogRead(joyYPin);
        delay(5);
    }
    centerX = sumX / 100;
    centerY = sumY / 100;
}

void setup() {
    pinMode(buttonPin, INPUT_PULLUP);
    Serial.begin(115200); // Start Serial Monitor
    Mouse.begin();
    calibrateJoystick(); // Auto-calibrate joystick at startup
}

void loop() {
    // Read joystick values and apply calibration
    joyXArray[indexical] = analogRead(joyXPin) - centerX;
    joyYArray[indexical] = analogRead(joyYPin) - centerY;
    indexical = (indexical + 1) % smoothingFactor;

    // Compute moving average
    int avgX = 0, avgY = 0;
    for (int i = 0; i < smoothingFactor; i++) {
        avgX += joyXArray[i];
        avgY += joyYArray[i];
    }
    avgX /= smoothingFactor;
    avgY /= smoothingFactor;

    // Apply deadzone
    if (abs(avgX) < deadzone) avgX = 0;
    if (abs(avgY) < deadzone) avgY = 0;

    // Move mouse
    Mouse.move(avgX * sensitivity, avgY * sensitivity, 0);

    // Handle button press for drag functionality
    button.update();
    if (button.fallingEdge()) {
        Mouse.press(MOUSE_LEFT);  // Click and hold for dragging
        isDragging = true;
    }
    if (button.risingEdge()) {
        Mouse.release(MOUSE_LEFT); // Release the button
        isDragging = false;
    }

    // Serial Monitor Output
    Serial.print("X: "); Serial.print(avgX);
    Serial.print(" | Y: "); Serial.print(avgY);
    Serial.print(" | Button: "); Serial.println(isDragging ? "Dragging" : "Released");

    delay(10); // Small delay for smooth movement
}
