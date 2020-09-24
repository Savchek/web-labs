let input = document.getElementById('input')
const charLimit = 256
let clear = false

const addCharacter = (c) => {
	if (clear) {
		input.innerText = ''
		clear = false
	}
	if (input.innerText.length >= charLimit) {
		return
	}
	input.innerText += c
	input.scrollLeft = 9999
}

const calculate = (system) => {
	if (input.innerText == '' || clear) return

	if (typeof system == 'number') {
		clear = true
	} else {
		system = 10
	}

	let result

	try {
		if (input.innerText.includes('**') || input.innerText.includes('//')) {
			throw new Error({ message: 'Operations error' })
		}

		let finalValue = input.innerText.replace(/\^/g, '**')

		result = eval(finalValue).toString(system)

		if (result.includes('Infinity')) {
			clear = true
		}

		if (isNaN(result)) {
			throw new Error({ message: 'Result error' })
		}
	}
	catch (e) {
		let m = e.message
		clear = true
		if (m.includes('is not a function') || m.includes(')')) {
			result = 'Parenthesis error'
		} else if (m == 'expected expression, got end of script') {
			result = 'Expression is unfinished'
		} else if (m == 'identifier starts immediately after numeric literal' || m.includes('is not defined') || m.includes('unexpected token')) {
			result = 'Not a number in input'
		} else {
			result = 'Expression error'
		}
	}
	finally {
		input.innerText = result
	}

}

document.querySelectorAll('.simple').forEach(e => e.addEventListener('click', () => addCharacter(e.innerText)))
document.getElementById('pow').addEventListener('click', () => addCharacter('^'))

document.getElementById('hex').addEventListener('click', () => calculate(16))
document.getElementById('octa').addEventListener('click', () => calculate(8))
document.getElementById('bin').addEventListener('click', () => calculate(2))
document.getElementById('calc').addEventListener('click', calculate)

document.getElementById('clear').addEventListener('click', () => {
	input.innerText = ''
})
document.getElementById('delete').addEventListener('click', () => {
	input.innerText = input.innerText.substring(0, input.innerText.length - 1)
})