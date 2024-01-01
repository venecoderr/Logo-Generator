import {Logo} from '../lib/logo.js'

describe('Logo', () => {
    describe('Logo renderElements() method', () => {
        it('should render the elements of the logo with the specified characteristics', () => {
            const specs = ['FRT', 'green', 'Triangle', 'gray']
            const logo = new Logo(...specs)
            const logoInnerElements = '<polygon points="150,0 50,200 250,200" height="200" width="300" fill="gray" stroke="black"/><text y="130" x="70" fill="green" font-size="100">FRT</text>'

            expect(logo.renderElements()).toEqual(logoInnerElements)
        })
    })
})

describe('Logo', () => {
    describe('Logo renderLogo() method', () => {
        it('should render the logo with the rendered elements', () => {
            const specs = ['FRT', 'green', 'Triangle', 'gray']
            const logo = new Logo(...specs)
            const logoSvg = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,0 50,200 250,200" height="200" width="300" fill="gray" stroke="black"/><text y="130" x="70" fill="green" font-size="100">FRT</text></svg>'

            expect(logo.renderLogo()).toEqual(logoSvg)
        })
    })
})