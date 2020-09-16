const calculateTask1 = () => {
	// Об'єм
	let v = Number(document.getElementById('t1v').value)
	// Висота
	let h = Number(document.getElementById('t1h').value)

	if (isNaN(v) || isNaN(h) || v <= 0 || h <= 0) {
		alert('Введено некоректні дані')
		return
	}

	// Кількість сторін
	let n = 4

	// Довжина сторони основи
	let a = Math.sqrt(v)

	// Апофема
	let f = Math.sqrt((h * h) + Math.pow((a / (2 * Math.tan(180 / n * Math.PI / 180))), 2))

	// Площа бічної поверхні
	let s = ((n * a) / 2) * f

	document.getElementById('t1res').innerText = s.toFixed(3)
}

document.getElementById('t1out').addEventListener('click', calculateTask1)