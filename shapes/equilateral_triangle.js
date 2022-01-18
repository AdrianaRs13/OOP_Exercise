import Shape from "./shape.js"

class Equilateral_Triangle extends Shape{
    constructor(color, filled, side=1.0){
        super(color, filled)
        this._side = side
    }
    getSideLength(){
        return this._side
    }
    setSideLength(newSide){
        this._side = newSide
    }

    getArea(){
        const area = (Math.sqrt(3)/4) * Math.pow(this._side, 2)
        return area.toFixed(1)
    }

    getPerimeter(){
        const perimeter = this._side * 3
        return perimeter.toFixed(1)
    }

    toString(){
        const color = super.color
        const filled = super.filled
        return `Triangle [ Shape [ color = ${this._color}, filled = ${this._filled} ], side = ${this._side}]`
    }
    

}

export default Equilateral_Triangle

