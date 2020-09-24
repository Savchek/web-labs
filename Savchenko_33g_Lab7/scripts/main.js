let ingredientsBlock = document.getElementById('ingredients')
let calculatedPriceBlock = document.getElementById('calculated')

let basePrice = 6

const updHTML = (e, count) => {
	let IngredientCountBlock = document.getElementById(e).querySelector('.count')
	let ingredientsPrice = calculateIngredientsPrice()

	if (IngredientCountBlock.innerText != count) {
		IngredientCountBlock.innerText = count
		calculatedPriceBlock.innerText = `COST: ${basePrice}$ + ${ingredientsPrice}$ = ${basePrice + ingredientsPrice}$`

	}
}

const calculateIngredientsPrice = () => {
	return Object.keys(ingredients)
		.reduce((total, e) => {
			let ingrediantTotalPrice = ingredients[e].count * ingredients[e].price
			return Number((total + ingrediantTotalPrice).toFixed(2))
		}, 0)
}

const increaceCount = (e) => {
	ingredients[e].increaceCount()
	updHTML(e, ingredients[e].count)
}

const decreaceCount = (e) => {
	ingredients[e].decreaceCount()
	updHTML(e, ingredients[e].count)
}

let ingredients = {
	'tomato': new Ingredient('tomato', 0.25),
	'onion': new Ingredient('onion', 0.15),
	'capisum': new Ingredient('capisum', 0.15),
	'chilly': new Ingredient('chilly', 0.15),
	'mushroom': new Ingredient('mushroom', 0.15),
	'corn': new Ingredient('corn', 0.15),
	'cheese': new Ingredient('cheese', 0.15),
	'paneer': new Ingredient('paneer', 0.15)
}

for (let e in ingredients) {
	let controlBlock = document.createElement('div')
	controlBlock.className = 'control'

	controlBlock.innerHTML = `
		<div id="${e}" class="count-block">
			<img src="./images/${e}.png" alt="">
			<i class="arrow arrow-left"></i>
			<span class="count">0</span>
			<i class="arrow arrow-right"></i>
		</div>
		<p class="name small-text">${e}</p>
		<p class="price small-text">${ingredients[e].price}$</p>
	`

	controlBlock.querySelector('.arrow-left').addEventListener('click', () => decreaceCount(e))
	controlBlock.querySelector('.arrow-right').addEventListener('click', () => increaceCount(e))

	ingredientsBlock.appendChild(controlBlock)
}