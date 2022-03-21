import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { StyleSheet, Text, View, ScrollView, PanResponder, 
          ToastAndroid,Animated,TouchableOpacity,TouchableHighlight,
          Platform,Alert, Modal, TextInput, SafeAreaView, Button
        } from 'react-native';
import { Dimensions } from 'react-native';

//size of the element
const WSIZE = Dimensions.get('window').width;
//number of squares 
const divisor = 50;
//size of a single unit (feet?)
const square = WSIZE/divisor;
//stores canvas context
var ctx;
//stores where the screen has been touched
var TargetX=0;
var TargetY=0;
//stores bed creation size
var BedX=1;
var BedY=1;



//const WSIZE = 700;
class GardenPlanner extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  handleCanvas = (canvas) => {
    if(canvas !== null){
      ctx = canvas.getContext('2d');
      canvas.width = Dimensions.get('window').width;
      canvas.height = Dimensions.get('window').height;
      this.CanvasNew();
      }
    }
  CanvasNew(){
      windowWidth = Dimensions.get('window').width;
      windowHeight = Dimensions.get('window').height;
      size = WSIZE;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, size, size);
      
      for (let i = 0; i <= divisor; i++) {
        ctx.moveTo(size/divisor*(i), 0);
        ctx.lineTo(size/divisor*(i), size);
        ctx.stroke();
        ctx.moveTo(0, size/divisor*(i));
        ctx.lineTo(size, size/divisor*(i));
        ctx.stroke();
        /*
        for (let ii = 0; ii <= divisor-1; ii++) {
          ctx.fillStyle = "white";
          ctx.fillRect(size/divisor*(i), size/divisor*(ii), size/divisor, size/divisor);
        }//*/
        
      }//*/
  }
  onTouch(evt){
    var x = Math.floor(evt.nativeEvent.locationX/square)+1;
    var y = Math.floor(evt.nativeEvent.locationY/square)+1;
    TargetX = Math.floor(evt.nativeEvent.locationX/square);
    TargetY = Math.floor(evt.nativeEvent.locationY/square);
    BedX=1;
    BedY=1;
    ToastAndroid.show("x coord = "+x+" y coord = "+y, ToastAndroid.SHORT);
    //ctx.fillStyle = "red";
    //ctx.fillRect((x-1)*square, (y-1)*square, square, square);
    this.setModalVisible(true);
  }

  generateColor() {
    var randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  }

  ClosePrompt(/*startX, startY, sizeX, sizeY*/){
    this.setModalVisible(false);
    ctx.fillStyle = this.generateColor();
    ctx.fillRect(TargetX*square, TargetY*square, BedX*square, BedY*square);
  }
  editTargetY(text){
    TargetY=parseInt(text);
  }
  editTargetX(text){
    TargetX=parseInt(text);
  }
  editBedY(text){
    BedY=parseInt(text);
  }
  editBedX(text){
    BedX=parseInt(text);
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <TouchableOpacity onPress={(evt) => this.onTouch(evt) } style={styles.GardenView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.prompt}>
          <TextInput style={styles.input} placeholder={TargetX.toString()} onChangeText={text => this.editTargetX(text)}/>
          <TextInput style={styles.input} placeholder={TargetY.toString()} onChangeText={text => this.editTargetY(text)}/>
          <TextInput style={styles.input} placeholder={BedX.toString()} onChangeText={text => this.editBedX(text)}/>
          <TextInput style={styles.input} placeholder={BedY.toString()} onChangeText={text => this.editBedY(text)}/>

          <Button
            title="Create Bed"
            color="#f194ff"
            onPress={() => this.ClosePrompt()}
          />
          </View>
        </Modal>
        <Canvas ref={this.handleCanvas} style={styles.canvas}/>
      </TouchableOpacity>

    )
  }
}

export default GardenPlanner;


const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    width: WSIZE,
    height: WSIZE,
  },
  GardenView: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#aaccaa",
    alignItems: "center",
    justifyContent: "center",
  },
  prompt:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    width: "60%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});//*/


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