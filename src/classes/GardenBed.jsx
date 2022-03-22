class GardenBed {
    height;
    width;
    topY;
    leftX;
    name;

    constructor(width, height, leftX, topY, name) {
        this.height = height;
        this.width = width;
        this.topY = topY;
        this.leftX = leftX;
        this.name = name;
    }

    didTouch(posX, posY){
        if(posX >= this.leftX && posX < this.leftX+this.width && posY >= this.topY && posY < this.topY+this.height){
            return true;
        }else{
            return false;
        }
    }
    doesIntersect(otherbed){
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