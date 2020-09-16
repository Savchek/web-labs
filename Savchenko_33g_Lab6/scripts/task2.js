const calculateTask2 = () => {
	let str = document.getElementById('t2text').value

	if (str == '') {
		alert('Введено некоректні дані')
		return
	}

	document.getElementById('t2res').innerText = str.split(' ').length
}

document.getElementById('t2out').addEventListener('click', calculateTask2)