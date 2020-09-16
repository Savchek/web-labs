const calculateTask2 = () => {
	let str = document.getElementById('t2text').value

	if (str.trim() == '') {
		alert('Введено некоректні дані')
		return
	}

	str = str.split('.')
	str.pop()

	document.getElementById('t2res').innerText = str.map((e, i) => 'Речення ' + String(i + 1) + ', слів: ' + String(e.trim().split(' ').length)).join('\n')
}

document.getElementById('t2out').addEventListener('click', calculateTask2)