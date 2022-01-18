class Shape {
    constructor(color='red', filled = true){
        this._color = color
        this._filled = filled
    }
    getColor(){
        return this._color
    }
    setColor(newColor){
        this._color=newColor
    }
    isFilled(){
        return this._filled
    }
    setFilled(newFilled){
        this._filled=newFilled
    }

    getArea(){}
    getPerimeter(){}

    toString(){
        return `Shape [ color = ${this._color}, filled = ${this._filled}]`
    }

}

export default Shape