const list = document.querySelectorAll("ul li")
const ul = document.querySelector("ul")
let len = list.length

const trash = document.querySelectorAll(".btn-danger")
for (let i = 0; i < trash.length; i++) {
	trash[i].addEventListener("click", function(e) {
		e.currentTarget.parentElement.remove()
		len--
	});
}

const checkbox = document.querySelectorAll(".form-check-input")
for (let i = 0; i < checkbox.length; i++) {
	checkbox[i].addEventListener("change", function(e) {
		console.log(e.currentTarget)
	});
}

document.querySelector("form").addEventListener("submit", function(e) {
	e.preventDefault()
	const data = new FormData(e.currentTarget)
	createNode(data.get("title"))
	len++
});

function createNode(title) {
	const li = document.createElement("li")
	li.setAttribute("class", "todo list-group-item d-flex align-items-center")

	const input = document.createElement("input")
	input.setAttribute("class", "form-check-input")
	input.setAttribute("type", "checkbox")
	input.setAttribute("id", `todo-${len + 1}`)
	input.addEventListener("change", function(e) {
		console.log(e.currentTarget)
	});

	const label = document.createElement("label")
	label.textContent = title
	label.setAttribute("class", "ms-2 form-check-label")
	label.setAttribute("for", `todo-${len + 1}`)

	const trash_label = document.createElement("label")
	trash_label.setAttribute("class", "ms-auto btn btn-danger btn-sm")
	trash_label.addEventListener("click", function(e) {
		e.currentTarget.parentElement.remove()
		len--
	});

	const i = document.createElement("i")
	i.setAttribute("class", "bi-trash")

	li.appendChild(input)
	li.appendChild(label)
	li.appendChild(trash_label)
	trash_label.appendChild(i)
	ul.appendChild(li)
}












// const myNodeList = document.querySelectorAll("ul li")


// for (let i = 0; i < myNodeList.length; i++) {
// 	let item = myNodeList[i];
// 	console.log(item)
// }
