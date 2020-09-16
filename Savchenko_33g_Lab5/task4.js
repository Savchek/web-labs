const calculateTask4 = () => {
	let n = Number(document.getElementById('t4n').value)

	if (isNaN(n) || n < 0 || Math.round(n) != n) {
		alert('Введено некоректні дані')
		return
	}

	let s = String(n).replace(/0/g, '*')

	document.getElementById('t4res').innerText = s
}

document.getElementById('t4out').addEventListener('click', calculateTask4)