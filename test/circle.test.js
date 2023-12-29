import {Circle} from '../lib/circle.js'

describe('Circle', () => {
    describe('Circle shape rendering', () => {
        it('should render a circle shape with the specified color', () => {
            const circle = new Circle
            const blueCircle = '<circle fill="blue" stroke="black" r="100" cy="100" cx="150" />'

            expect(circle.render('blue')).toEqual(blueCircle)
        })
    })
})