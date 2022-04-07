class GardenBed {
  height:number;
  width:number;
  topY:number;
  leftX:number;
  name:string;

  constructor(x1:number, y1:number, x2:number, y2:number, name:string) {

    if(x1 <= x2){
      this.leftX = x1;
    }else{
      this.leftX = x2;
    }
    if(y1 <= y2){
      this.topY = y1;
    }else{
      this.topY = y2;
    }

    this.height = Math.abs(y2-y1)+1;
    this.width = Math.abs(x2-x1)+1;
    this.name = name;
  }


  didTouch(posX:number, posY:number){
    if(posX >= this.leftX && posX < this.leftX+this.width && posY >= this.topY && posY < this.topY+this.height){
      return true;
    }else{
      return false;
    }
  }
  doesIntersect(otherbed:GardenBed){
    if(
      this.didTouch(otherbed.leftX, otherbed.topY) ||
            this.didTouch(otherbed.leftX+otherbed.width-1, otherbed.topY) ||
            this.didTouch(otherbed.leftX, otherbed.topY+otherbed.height-1) ||
            this.didTouch(otherbed.leftX+otherbed.width-1, otherbed.topY+otherbed.height-1) ||
            otherbed.didTouch(this.leftX, this.topY) ||
            otherbed.didTouch(this.leftX+this.width-1, this.topY) ||
            otherbed.didTouch(this.leftX, this.topY+this.height-1) ||
            otherbed.didTouch(this.leftX+this.width-1, this.topY+otherbed.height-1)
    ){
      return true;
    }else{
      return false;
    }
  }
}

export default GardenBed;