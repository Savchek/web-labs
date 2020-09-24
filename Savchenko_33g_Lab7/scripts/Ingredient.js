class Ingredient {
	constructor(name, price) {
		this.name = name
		this.price = price
		this._count = 0
	}

	get count() {
		return this._count
	}

	set count(num) {
		if (isNaN(num) || num < 0) {
			return
		}
		this._count = num
	}

	increaceCount() {
		this.count = this.count + 1
	}

	decreaceCount() {
		this.count = this.count - 1
	}
}