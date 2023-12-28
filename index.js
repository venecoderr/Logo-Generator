import inquirer from 'inquirer'
import { writeFile } from 'fs'
import { questions } from './lib/questions.js'
import { Logo } from './lib/logo.js'

function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const logo = new Logo(data.text, data.textColor, data.shape, data.shapeColor)
        writeFile('./dist/logo.svg', logo.renderLogo(), (err) => err ? console.error(err) : console.log('Generated logo.svg') )
    })
}

init()