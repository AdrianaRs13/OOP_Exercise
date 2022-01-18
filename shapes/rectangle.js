import Shape from "./shape.js"

class Rectangle extends Shape{
    constructor(color, filled, width = 1.0, length = 1.0){
        super(color, filled)
        this._width = width
        this._length = length
    }
    getWidth(){
        return this._width
    }
    setWidth(newWidth){
        this._width = newWidth
    }
    getLength(){
        return this._length
    }
    setLength(newLength){
        this._length = newLength
    }
    
    getArea(){
        const area = this._width * this._length
        return area.toFixed(1)
    }
    getPerimeter(){
        const perimeter = 2 * this._width + 2 * this._length
        return perimeter.toFixed(1)
    }
    toString(){
        const color = super.color
        const filled = super.filled
        return `Rectangle [ Shape [ color = ${this._color}, filled = ${this._filled}], width = ${this._width}, length = ${this._length}]`
    }

}

export default Rectangle
