const calculateTask2 = () => {
	let a = Number(document.getElementById('t2a').value)
	let b = Number(document.getElementById('t2b').value)
	let c = Number(document.getElementById('t2c').value)

	if (isNaN(a) || isNaN(b) || isNaN(c) || !((a < b + c) && (b < c + a) && (c < a + b))) {
		alert('Введено некоректні дані')
		return
	}

	let p = (a + b + c) / 2

	let t = 2 * Math.sqrt(p * (p - a) * (p - b) * (p - c))

	document.getElementById('t2res').innerText = Math.max(t / a, t / b, t / c)
}

document.getElementById('t2out').addEventListener('click', calculateTask2)