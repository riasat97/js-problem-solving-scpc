// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// $circy = new Circle(11);
// $->getArea();

// // Should return 380.132711084365

// $circy = new Circle(4.44);
// $->getPerimeter();

// // Should return 27.897342763877365
class Circle{
    constructor(radius){
        this.radius= radius
    }
    getArea(){
        return Math.PI * Math.pow(this.radius,2)
    }
    getPerimeter(){
        return 2* Math.PI * this.radius;
    }
}

const circle= new Circle(4.4);
//console.log(circle.getArea().toFixed(2));
console.log(circle.getPerimeter());