const car = {
    width : 10 ,
    height : 5,
    getArea : function(width, height) {
       return  this.width * this.height;
    }
};
console.log(car.getArea());