import React, { Component } from "react";
import { View } from "react-native";
import Canvas from "react-native-canvas";

class PlantCalendar extends Component {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCanvas = function (canvas: any) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);
  };
  render() {
    return(
      <View>
        <Canvas
          ref={this.handleCanvas}
        />
      </View>
    );
  }
        
}

export default PlantCalendar;