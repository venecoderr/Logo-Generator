export const questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo: ',
    validate: async (text) => {
        if (text.lenght > 3){
            return 'Logo text must be 3 characters max'
        }
        return true
        }
    }, 
    {type: 'input', 
    name: 'textColor', 
    message: 'Enter a color for the text (accepts color names and hex codes): ',
    validate: async (textColor) => {
        const isItValid = CSS.supports('color', textColor)
        if (!isItValid){
            return 'Invalid Color'
        }
        return true
        }
    }, 
    {
    type: 'list',
    name: 'shape', 
    message: 'What shape would your logo have?', 
    choices: ['Circle', 'Triangle', 'Square']
    }, 
    {type: 'input', 
    name: 'shapeColor', 
    message: 'Enter a color for the shape (accepts color names and hex codes): ',
    validate: async (shapeColor) => {

        if (CSS.supports('color', shapeColor)){
            return 'Invalid Color'
        }
        return true
        }
    }
]


