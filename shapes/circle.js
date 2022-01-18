import Shape from "./shape.js"

class Circle extends Shape{
    constructor(color, filled, radius=1.0){
        super(color, filled)
        this._radius = radius
    }
    getRadius(){
        return this._radius
    }
    setRadius(newRadius){
        this._radius = newRadius
    }
    getArea(){
        const area = Math.PI * Math.pow(this._radius, 2)
        return area.toFixed(1)
    }
    getPerimeter(){
        const perimeter = 2 * Math.PI * this._radius
        return perimeter.toFixed(1)
    }
    toString(){
        const color = super.color
        const filled = super.filled
        return `Circle [ Shape [ color = ${this._color}, filled = ${this._filled}], radius = ${this._radius}]`
    }

}

export default Circle

