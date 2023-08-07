class Area{
    constructor(width,height){
        this.width= width,
        this.height= height
    }
    getArea(){
       return 0.5*this.width*this.height;
    }

}
const area= new Area(10,5);
console.log(area.getArea());