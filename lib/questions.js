import { colors, isHex } from "./colors.js"

export const questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo: ',
    validate: (text) => {
            if (text.length > 3){
                return 'Logo text must be 3 characters max'
            }else if (text.length <= 0){
                return 'Logo text must be 1 character min'
            }else{
                return true
            }
        }
    }, 
    {type: 'input', 
    name: 'textColor', 
    message: 'Enter a color for the text (accepts color names and hex codes): ',
    validate: (textColor) => {
            if(colors.includes(textColor) || isHex.test(textColor)){
                return true
            }else{
                return 'Try again with a valid color name or hex code'
            }
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
    validate: (textColor) => {
            if(colors.includes(textColor) || isHex.test(textColor)){
                return true
            }else{
                return 'Try again with a valid color name or hex code'
            }
        }
    }
]


