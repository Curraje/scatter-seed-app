import { gql } from "@apollo/client";
import GardenBed from "./GardenBed";

const CREATE_GARDEN_QUERY = gql`
mutation CreateGarden {
createGarden(
data: {
name: "123"
height: 12
width: 12
beds: {
create: {
name: "bed1"
height: 3
width: 3
coord_x: 2
coord_y: 3
notes: ""
}
}
user: { connect: { username: "alicethebest" } }
}
) {
id
name
}
}`;


class Garden {
  id:number;
  name:string;
  height:number;
  width:number;
  beds:GardenBed[];
    


  constructor(height:number, width:number, name:string, id=0, beds:GardenBed[]=[]) {
        
    this.width = width;
    this.height = height;
    this.name = name;
        
    this.beds = beds;

    this.id = id;
  }



  //wip
  addBed(bed:GardenBed){
    this.beds.push(bed);
  }

  //wip
  deleteBed(bed:GardenBed){
    for (let i = 0; i < this.beds.length; i++) {
      if(bed == this.beds[i]){
        this.beds.splice(i, 1);
      }
    }
  }

  static getGarden(id:number){
        
    return new Garden(1,1,"name");
  }
  //garden = Garden.getGarden(5); 

  static getAllGardens(userId:number){
        
    return; 
  }
    

    
}

export default GardenBed;