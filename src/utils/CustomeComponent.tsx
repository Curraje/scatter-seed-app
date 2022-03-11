import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import CustomButton from './CustomButton';

class CustomeComponent extends Component {
  
  handleCanvas = (canvas:Canvas) => {
    var size = 200
    var divisor = 6
    if(canvas !== null){
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, size, size);
      for (let i = 0; i <= divisor; i++) {
        ctx.moveTo(size/divisor*(i), 0);
        ctx.lineTo(size/divisor*(i), size);
        ctx.stroke();
        ctx.moveTo(0, size/divisor*(i));
        ctx.lineTo(size, size/divisor*(i));
        ctx.stroke();
      }
    }
  }

  render() {
    return (
      <Canvas ref={this.handleCanvas}/>
    )
  }
}

export default CustomeComponent;//*/




/*import { StyleSheet, Text, View } from 'react-native';
import Canvas from 'react-native-canvas';

const GridGarden = (props: any) => {
  const handleCanvas = (canvas: Canvas) => {
    var size = 400
      var divisor = 6
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, size, size);
      for (let i = 0; i <= divisor; i++) {
        ctx.moveTo(size/divisor*(i), 0);
        ctx.lineTo(size/divisor*(i), size);
        ctx.stroke();
        ctx.moveTo(0, size/divisor*(i));
        ctx.lineTo(size, size/divisor*(i));
        ctx.stroke();
      }
  }
  return (
    <View style={styles.GardenView}>
      <Canvas ref={handleCanvas}/>
    </View>
      
  );

}
export default GridGarden;//*/
/*
const styles = StyleSheet.create({
  GardenView: {
    width: 400,
    height: 400,
  }
})//*/


/*
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Canvas from 'react-native-canvas';

class GridGarden extends Component {
  //
  handleCanvas = (canvas: Canvas) => {
    const ctx = canvas.getContext('2d');
    var size = 400
    var divisor = 4
    canvas.width = size;
    canvas.height = size;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);
    
    for (let i = 0; i <= divisor; i++) {
      ctx.moveTo(size/divisor*(i), 0);
      ctx.lineTo(size/divisor*(i), size);
      ctx.stroke();
      ctx.moveTo(0, size/divisor*(i));
      ctx.lineTo(size, size/divisor*(i));
      ctx.stroke();
    }
    
  }

  render() {
    return (
      <View style={styles.canvas}>
        <canvas ref={this.handleCanvas}/>
      </View>
      
    );
  }
}

export default GridGarden;

const styles = StyleSheet.create({
  canvas: {
    width: 400,
    height: 400,
  }
});//*/

