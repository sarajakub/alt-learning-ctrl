//V0 of rotary encoder input. 
  //next step is to connect it with computer simulation using teensy and output signals

//this code uses arduino nano every
  //nano every interrupt pins are on d2 and d3. 
  //change according to interrupt pins
  //the teensy has interrupt pins on every pin
//thoughts for future iterations: 
  //should i constrain the values (no.. just make it so that 
  //=> last value = "Clockwise rotation" (+1), 
  //=< last value = "Counterclockwise rotation" (-1).)
  //different button activations (SDA, SCL) based on clicks, press time
    //if LongPressStop() - LongPressStop() >=500 {
      //Serial.println("Activate"); }
    //or i can just make this less complicated by using the library differently (define/use pressStart and pressStop)

#include <Encoder.h>
#include <OneButton.h>
#include <Arduino.h>

// Change the two numbers below to the pins connected to your encoder:
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder myEnc(2, 3);
#define PIN_INPUT 14

// Setup a new OneButton on pin PIN_INPUT
// The 2. parameter activeLOW is true, because external wiring sets the button to LOW when pressed.
OneButton button(PIN_INPUT, true);

// In case the momentary button puts the input to HIGH when pressed:
// The 2. parameter activeLOW is false when the external wiring sets the button to HIGH when pressed.
// The 3. parameter can be used to disable the PullUp .
// OneButton button(PIN_INPUT, false, false);



void setup() {
  Serial.begin(9600);
  Serial.println("Basic Encoder Test:");
  Serial.println("\nOneButton Example.");
  Serial.println("Please press and hold the button for a few seconds.");
  // link functions to be called on events.
  button.attachLongPressStart(LongPressStart, &button);
  button.attachDuringLongPress(DuringLongPress, &button);
  button.attachLongPressStop(LongPressStop, &button);
    // link the xxxclick functions to be called on xxxclick event.
  button.attachClick(singleClick);
  button.attachDoubleClick(doubleClick);

  button.setLongPressIntervalMs(1000);
} // setup end

long oldPosition  = -999;

void loop() {
    // keep watching the push button:
  button.tick();

  // You can implement other code in here or just wait a while
  delay(10);
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
} //loop end
// this function will be called when the button started long pressed.
void LongPressStart(void *oneButton)
{
  Serial.print(((OneButton *)oneButton)->getPressedMs());
  Serial.println("\t - LongPressStart()");
}

// this function will be called when the button is released.
void LongPressStop(void *oneButton)
{
  Serial.print(((OneButton *)oneButton)->getPressedMs());
  Serial.println("\t - LongPressStop()\n");
}

// this function will be called when the button is held down.
void DuringLongPress(void *oneButton)
{
  Serial.print(((OneButton *)oneButton)->getPressedMs());
  Serial.println("\t - DuringLongPress()");
}

void singleClick() {
  Serial.println("singleClick() detected.");
} // singleClick

void doubleClick() {
  Serial.println("doubleClick() detected.");
} // doubleClick

// End
