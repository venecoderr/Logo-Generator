import {Square} from '../lib/square.js'

describe('Square', () => {
    describe('Square shape rendering', () => {
        it('should render a square shape with the specified color', () => {
            const square = new Square
            const blueSquare = '<rect width="300" height="200" fill="blue" stroke="black" />'

            expect(square.render('blue')).toEqual(blueSquare)
        })
    })
})