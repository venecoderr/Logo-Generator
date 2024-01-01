import {Text} from '../lib/text.js'

describe('Text', () => {
    describe('Text shape rendering', () => {
        it('should render the specified text with the specified font color', () => {
            const text = new Text
            const color = 'blue'
            const innerText = 'Test'
            const blueText = '<text y="130" x="70" fill="blue" font-size="100">Test</text>'

            expect(text.render(innerText, color)).toEqual(blueText)
        })
    })
})