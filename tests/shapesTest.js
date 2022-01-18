import Shape from "../shapes/shape.js"
import Equilateral_Triangle from "../shapes/equilateral_triangle.js"
import Rectangle from "../shapes/rectangle.js"
import Square from "../shapes/square.js"
import Circle from "../shapes/circle.js"

const littleShape = new Shape('pink', false)
console.log(littleShape.toString())
littleShape.setColor('brown')
console.log(littleShape.getColor())
littleShape.setFilled(true)
console.log(littleShape.isFilled())
console.log("\n")

const littleTriangle = new Equilateral_Triangle('yellow', true, 1)
console.log(littleTriangle.toString())
console.log(littleTriangle.getArea())
console.log(littleTriangle.getPerimeter())
littleTriangle.setSideLength(4)
console.log(littleTriangle.getSideLength())
console.log(littleTriangle.getArea())
console.log(littleTriangle.getPerimeter())
console.log("\n")


const littleRectangle = new Rectangle('purple', true, 4, 6)
console.log(littleRectangle.toString())
console.log(littleRectangle.getArea())
console.log(littleRectangle.getPerimeter())
littleRectangle.setLength(7)
littleRectangle.setWidth(10)
console.log(littleRectangle.getWidth())
console.log(littleRectangle.getLength())
console.log(littleRectangle.getArea())
console.log(littleRectangle.getPerimeter())
console.log("\n")

const littleSquare = new Square('red', false, 4)
console.log(littleSquare.toString())
console.log(littleSquare.getArea())
console.log(littleSquare.getPerimeter())
littleSquare.setSide(6.4)
console.log(littleSquare.getSide())
console.log(littleSquare.getArea())
console.log(littleSquare.getPerimeter())
console.log("\n")

const littleCircle = new Circle('blue', true, 3.23)
console.log(littleCircle.toString())
console.log(littleCircle.getArea())
console.log(littleCircle.getPerimeter())
littleCircle.setRadius(5.5)
console.log(littleCircle.getRadius())
console.log(littleCircle.getArea())
console.log(littleCircle.getPerimeter())
console.log("\n")



