import { fetchJSON } from "./functions/api.js"

let len = 0
const hide = document.createElement('style')
hide.innerHTML = '.hide { display: none; }'
document.getElementsByTagName('head')[0].appendChild(hide)

try {
	const todos = await fetchJSON("https://jsonplaceholder.typicode.com/todos?_limit=5")
	for (const todo of todos) {
		console.log(todo)
		createNode(todo.title, todo.completed)
	}
} catch (e) {
	console.error("cannot create node from import JSON")
}

const status = document.querySelectorAll(".btn-outline-primary")
for (let i = 0; i < status.length; i++) {
	status[i].addEventListener("click", function (e) {
		const s = document.querySelector(".active")
		if (s !== e.currentTarget) {
			const li = document.querySelectorAll("ul li")
			s.setAttribute("class", "btn btn-outline-primary")
			e.currentTarget.setAttribute("class", "btn btn-outline-primary active")
			for (const l of li) {
				l.setAttribute("class", "todo list-group-item d-flex align-items-center")
				if (e.currentTarget.id === "todo" && l.getAttribute("completed") === "true") 
					l.setAttribute("class", "hide")
				else if (e.currentTarget.id === "done" && l.getAttribute("completed") === "false")
					l.setAttribute("class", "hide")
			}
		}
	})
}

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault()
	const data = new FormData(e.currentTarget)
	createNode(data.get("title"))
})

function createNode(title, completed = false) {
	const li = document.createElement("li")
	li.setAttribute("class", "todo list-group-item d-flex align-items-center")
	li.setAttribute("completed", completed)
	
	const input = document.createElement("input")
	if (completed)
		input.checked = true
	input.setAttribute("class", "form-check-input")
	input.setAttribute("type", "checkbox")
	input.setAttribute("id", `todo-${len + 1}`)
	input.addEventListener("change", function (e) {
		const status = document.querySelector(".active").id
		e.currentTarget.parentElement.setAttribute("completed", e.target.checked)
		if (status === "todo" && e.target.checked)
			e.currentTarget.parentElement.setAttribute("class", "hide")
		else if (status === "done" && !e.target.checked)
			e.currentTarget.parentElement.setAttribute("class", "hide")
	})

	const label = document.createElement("label")
	label.textContent = title
	label.setAttribute("class", "ms-2 form-check-label")
	label.setAttribute("for", `todo-${len + 1}`)

	const trash = document.createElement("label")
	trash.setAttribute("class", "ms-auto btn btn-danger btn-sm")
	trash.addEventListener("click", function (e) {
		e.currentTarget.parentElement.remove()
		len--
	})

	const i = document.createElement("i")
	i.setAttribute("class", "bi-trash")

	li.appendChild(input)
	li.appendChild(label)
	li.appendChild(trash)
	trash.appendChild(i)
	if (document.querySelector(".active").id === "done")
		li.setAttribute("class", "hide")
	document.querySelector("ul").appendChild(li)
	len++
}
