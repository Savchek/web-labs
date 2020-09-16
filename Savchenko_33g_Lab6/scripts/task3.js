const calculateTask3 = () => {
	let n = Number(document.getElementById('t3n').value)

	if (isNaN(n) || n < 1) {
		alert('Введено некоректні дані')
		return
	}

	const fib = (prev, summ, i) => i == n ? summ : fib(summ, prev + summ, ++i)

	document.getElementById('t3res').innerText = fib(0, 1, 1)
}

document.getElementById('t3out').addEventListener('click', calculateTask3)