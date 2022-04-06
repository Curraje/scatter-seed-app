/* eslint-disable no-undef */
import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { StyleSheet, Text, View, ScrollView, PanResponder, 
  ToastAndroid,Animated,TouchableOpacity,TouchableHighlight,
  Platform,Alert, Modal, TextInput, SafeAreaView, StatusBar
} from 'react-native';
import { Button } from 'react-native-paper';
import { Dimensions } from 'react-native';
import GardenBed from '../classes/GardenBed';

//size of the element
const WSIZE = Dimensions.get('window').width;
const HSIZE = Dimensions.get('window').height;
var divisor = 15;
var square = WSIZE/divisor;
var ModalLocation;


class GardenPlanner extends Component {
  //stores canvas context
  ctx;
  

  //stores where the screen has been touched
  TargetX=0;
  TargetY=0;
  //stores bed creation parameters
  BedX=1;
  BedY=1;
  
  //stores existing beds
  beds = [];
  TargetBed;

  state = {
    addNewVisible: false,
    editVisible: false,
    bedName: "",
    bedNotes: "",
    //plant variety
  };
  setaddNewVisible = (visible) => {
    this.setState({ addNewVisible: visible });
  };
  setEditVisible = (visible) => {
    this.setState({ editVisible: visible });
  };
  setBedName = (text) => {
    this.setState({ bedName: text });
  };
  setBedNotes = (visible) => {
    this.setState({ bedNotes: visible });
  };
  handleCanvas = (canvas) => {
    if(canvas !== null){
      ctx = canvas.getContext('2d');
      canvas.width = WSIZE;
      canvas.height = WSIZE;
      this.CanvasNew();
    }
  };
  CanvasNew(){
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
    }//*/
    for (let i = 0; i < this.beds.length; i++) {
      this.DrawBed(this.beds[i]);
    }

  }
  onTouch(evt){
    var x = Math.floor(evt.nativeEvent.locationX/square)+1;
    var y = Math.floor(evt.nativeEvent.locationY/square)+1;
    TargetX = Math.floor(evt.nativeEvent.locationX/square);
    TargetY = Math.floor(evt.nativeEvent.locationY/square);
    BedX=1;
    BedY=1;
    
    if(this.beds.length > 0){
      
      var i = 0;
      while(i < this.beds.length && !this.beds[i].didTouch(TargetX,TargetY)){
        i++;
        if(i == this.beds.length){
          this.setaddNewVisible(true);
        }
      }//*/
      if(i < this.beds.length && this.beds[i].didTouch(TargetX,TargetY)){
        ToastAndroid.show(this.beds[i].name, ToastAndroid.SHORT);
        this.OpenBedEdit(this.beds[i]);
      }
    }else{
      this.setaddNewVisible(true);
    }
    
    
  }

  OpenBedEdit(bed){
    TargetBed = bed;
    
    this.setEditVisible(true);
  }

  generateColor() {
    var randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  }
  DrawBed(bed){
    ctx.fillStyle = this.generateColor();
    ctx.fillRect(bed.leftX*square, bed.topY*square, bed.width*square, bed.height*square);
    ctx.fillStyle = "white";
    ctx.fillRect(bed.leftX*square+square*0.25, bed.topY*square+square*0.25, bed.width*square-square*0.5, bed.height*square-square*0.5);
  }
  
  onSecondTouch(evt){
    var x = Math.floor(evt.nativeEvent.locationX/square);
    var y = Math.floor(evt.nativeEvent.locationY/square);
    var bed = new GardenBed(TargetX, TargetY, x, y, "");

    if(this.beds.length > 0){
      var i = 0;
      while(i < this.beds.length && !this.beds[i].doesIntersect(bed)){
        i++;
        if(i == this.beds.length){
          this.beds.push(bed);
          this.DrawBed(bed);
        }
      }//*/
      if(i < this.beds.length-1 && this.beds[i].doesIntersect(bed)){
        ToastAndroid.show("intersects "+this.beds[i].name, ToastAndroid.SHORT);
      }
    }else{
      this.beds.push(bed);
      this.DrawBed(bed);
    }
    this.ClosePrompt();
  }
  DeleteBed(bed = TargetBed){
    for (let i = 0; i < this.beds.length; i++) {
      if(bed == this.beds[i]){
        this.beds.splice(i, 1);
      }
    }
    this.CanvasNew();
    this.CloseEdit();
  }

  ClosePrompt(){
    this.setaddNewVisible(false);
  }
  CloseEdit(){
    this.setEditVisible(false);
  }

  editBedName(text){
    TargetBed.name = text;
    this.setBedName(TargetBed.name);
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
  //*/
  promptStyle = function(options) {
    return {
      paddingTop: 5,
      top: ModalLocation,
      width: WSIZE,
      alignItems: "center",
      //backgroundColor: "gray",
      // elevation: 5,
    };
  };

  render() {
    const { addNewVisible, editVisible, bedName, bedNotes } = this.state;
    return (
      <View
        onLayout={event => {
          const layout = event.nativeEvent.layout;
          ModalLocation = StatusBar.currentHeight+layout.y;
        }}
      >
        <TouchableOpacity onPress={(evt) => this.onTouch(evt) } style={styles.GardenView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={addNewVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setaddNewVisible(!addNewVisible);
            }}
          >
            <View style={this.promptStyle()}>
              <TouchableOpacity  onPress={(evt) => this.onSecondTouch(evt) } style={styles.Overlay}>
              </TouchableOpacity>
              <Button
                title="Cancel"
                icon="close"
                style={styles.modalButton}
                onPress={() => this.ClosePrompt()}
                mode="contained"
              >
              Close Prompt
              </Button>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={editVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setaddNewVisible(!editVisible);
            }}
          >
            <View style={styles.prompt}>
              <TextInput style={styles.input} value={bedName} onChangeText={text => this.editBedName(text)}/>

              <Button
                title="Close Bed Screen"
                icon="undo"
                style={styles.modalButton}
                onPress={() => this.CloseEdit()}
                mode="contained"
              >
                Close Modal
              </Button>
              <Button
                title="Delete Bed"
                icon="delete"
                style={styles.modalButton}
                onPress={() => this.DeleteBed()}
                mode="contained"
              >Delete Bed</Button>
            </View>
          </Modal>
          <Canvas ref={this.handleCanvas} style={styles.canvas}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GardenPlanner;


const styles = StyleSheet.create({
  canvas: {
    width: WSIZE,
    height: WSIZE,
  },
  modalButton: {
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#fbf0e2",
    borderRadius: 10,
    color: "#7a4b0e",
  },
  GardenView: {
    width: WSIZE,
    height: WSIZE,
    backgroundColor: "#aaccaa",
    alignItems: "center",
    justifyContent: "center",
  },
  Overlay: {
    width: WSIZE,
    height: WSIZE,
    backgroundColor: 'rgba(200, 200, 200, 0.2)',
  },
  prompt:{
    margin: 20,
    backgroundColor: "#bce1f6",
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
    elevation: 15,
  },
  input: {
    width: "60%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});