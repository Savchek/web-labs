const calculateTask1 = () => {
	let str = document.getElementById('t1arr').value

	let arr = str.split(' ').map(e => Number(e))

	if (str == '' || arr.some(e => isNaN(e) || Math.round(e) != e)) {
		alert('Введено некоректні дані')
		return
	}

	let tempArr = []

	let maxNum, maxCount = 0

	arr.forEach(e => {
		tempArr[e] ? tempArr[e]++ : tempArr[e] = 1
		if (tempArr[e] > maxCount) {
			maxCount = tempArr[e]
			maxNum = e
		}
	})

	document.getElementById('t1res').innerText = maxNum
}

document.getElementById('t1out').addEventListener('click', calculateTask1)