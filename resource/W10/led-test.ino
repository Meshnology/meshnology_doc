#include <Adafruit_NeoPixel.h>

#define PIN_NEOPIXEL 48
#define NUMPIXELS    1

Adafruit_NeoPixel pixels(NUMPIXELS, PIN_NEOPIXEL, NEO_GRB + NEO_KHZ800);

void setup() {
  pixels.begin();
  pixels.setBrightness(100);
  pixels.clear();
}

void loop() {
  for(int r=0; r<256; r+=5) {
    pixels.setPixelColor(0, pixels.Color(r, 0, 255-r));
    pixels.show();
    delay(30);
  }
}
