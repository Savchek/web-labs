const slides = document.getElementsByClassName('slide')
const dots = document.querySelectorAll('.dot')

dots.forEach((e, i) => e.addEventListener('click', () => showSlide(i)))

showSlide = n => {

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '')
	}

	slides[n].style.display = 'flex'
	dots[n].className += ' active'
}

showSlide(0)