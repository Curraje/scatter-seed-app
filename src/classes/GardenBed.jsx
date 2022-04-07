class GardenBed {
    height;
    width;
    topY;
    leftX;
    name;

    constructor(x1, y1, x2, y2, name) {

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