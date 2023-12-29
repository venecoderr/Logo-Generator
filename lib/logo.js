import {Circle} from './circle.js'
import {Square} from './square.js'
import {Triangle} from './triangle.js'
import { Text } from './text.js'

export class Logo {
    constructor(text, textColor, shape, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
    }

    renderLogo(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderElements()}</svg>`
    }

    renderElements(){
        const text = new Text
        let logoInnerElements

        switch(this.shape){
            case 'Circle':
                const circle = new Circle
               logoInnerElements = circle.render(this.shapeColor)
            break
            case 'Square':
                const square = new Square
               logoInnerElements = square.render(this.shapeColor)
            break
            case 'Triangle':
                const triangle = new Triangle
               logoInnerElements = triangle.render(this.shapeColor)
            break
        }

        logoInnerElements += text.render(this.text, this.textColor)

        return logoInnerElements
    }
}

