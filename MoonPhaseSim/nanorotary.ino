//Rotary encoder control for moon phase simulation
//Uses Arduino Nano Every with interrupt pins on d2 and d3

#include <Encoder.h>
#include <OneButton.h>

// Encoder pins (interrupt capable)
Encoder myEnc(2, 3);
#define BUTTON_PIN 14

// Button setup with active LOW (pullup)
OneButton button(BUTTON_PIN, true);

// Control state
bool controllingEarth = false;  // false = Moon control, true = Earth control
long oldPosition = 0;
const int ENCODER_SENSITIVITY = 2;  // Adjust for desired rotation sensitivity

void setup() {
  Serial.begin(9600);
  
  // Configure button handlers
  button.attachClick(handleClick);         // Single click for play/pause
  button.attachLongPressStart(handleLongPressStart); // Long press for control switch
  button.setPressTicks(1000);             // 1 second for long press
}

void loop() {
  // Process button events
  button.tick();

  // Read encoder position
  long newPosition = myEnc.read();
  
  // Check if encoder has moved enough steps
  if (abs(newPosition - oldPosition) >= ENCODER_SENSITIVITY) {
    // Determine rotation direction
    int direction = (newPosition > oldPosition) ? 1 : -1;
    
    // Send appropriate command based on control mode
    if (controllingEarth) {
      Serial.print("E");  // Earth rotation command
    } else {
      Serial.print("M");  // Moon rotation command
    }
    
    // Send direction
    Serial.println(direction > 0 ? "+" : "-");
    
    oldPosition = newPosition;
  }
  
  // Small delay to prevent serial buffer overflow
  delay(5);
}

// Handle single click - Toggle play/pause
void handleClick() {
  Serial.println("P");  // Play/Pause toggle command
}

// Handle long press - Switch between Moon and Earth control
void handleLongPressStart() {
  controllingEarth = !controllingEarth;
  Serial.println(controllingEarth ? "CE" : "CM");  // Control mode change command
}
