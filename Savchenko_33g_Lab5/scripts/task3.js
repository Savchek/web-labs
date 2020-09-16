const calculateTask3 = () => {
	let n = Number(document.getElementById('t3n').value)

	if (isNaN(n) || n < 2) {
		alert('Введено некоректні дані')
		return
	}

	let s = 0

	const simple = num => {
		for (let i = 2; i < num; i++) {
			if (num % i == 0) {
				return false
			}
		}
		return true
	}

	for (let i = 2; i <= n; i++) {
		if (simple(i)) {
			s += i
		}
	}

	document.getElementById('t3res').innerText = s
}

document.getElementById('t3out').addEventListener('click', calculateTask3)