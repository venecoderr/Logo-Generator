export class Text {

    render(text, textColor) {
        return `<text y='130' x='70' fill="${textColor}" font-size="100">${text.substring(0, 3)}</text>`
    }
}