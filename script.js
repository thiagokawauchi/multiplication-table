let button = document.getElementsByTagName('button')

button[0].addEventListener("click", showTable)

function showTable () {
	let number = Number(document.getElementById('number').value)
	let table = document.getElementById('select-table')

	table.innerHTML = ""

	for (let i = 1; i <=10; i++) {
		let item = document.createElement('option')
		item.text = `${number} x ${i} = ${number * i}`
		table.appendChild(item)
	}	
}
