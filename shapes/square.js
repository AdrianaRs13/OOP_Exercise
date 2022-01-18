import Rectangle from "./rectangle.js"

class Square extends Rectangle{  
    constructor(color, filled, side){
        super(color, filled)
        this.side = side
        this.width = side;
        this.length = side;
    }
    getSide(){
        return this.width
    }
    setSide(newSide){
        this.side = newSide
        this.width = newSide
        this.length = newSide
    }
    setWidth(newWidth){
        this.setSide(newWidth)
    }
    setLength(newLength){
        this.setSide(newLength)
    }
    toString(){
        const color = super.color
        const filled = super.filled
        return `Square [ Rectangle [ Shape [ color = ${this._color}, filled = ${this._filled}] width = ${super.getWidth()}, length = ${super.getLength()}]]`
    }
    getArea(){
        const area = this.side * this.side 
        return area.toFixed(1)
    }
    getPerimeter(){
        const perimeter = 4 * this.side
        return perimeter.toFixed(1)
    }

}

export default Square
