import {Triangle} from '../lib/triangle.js'

describe('Triangle', () => {
    describe('Triangle shape rendering', () => {
        it('should render a triangle shape with the specified color', () => {
            const triangle = new Triangle
            const blueTriangle = '<polygon points="150,0 50,200 250,200" height="200" width="300" fill="blue" stroke="black"/>'

            expect(triangle.render('blue')).toEqual(blueTriangle)
        })
    })
})