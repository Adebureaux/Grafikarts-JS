let len = 0
const hide = document.createElement('style');
hide.innerHTML = '.hide { display: none; }';
document.getElementsByTagName('head')[0].appendChild(hide);

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault()
	const data = new FormData(e.currentTarget)
	createNode(data.get("title"))
})

function toggleStatus (e) {
	const status = document.querySelector(".active")
	if (status !== e) {
		const li = document.querySelectorAll("ul li")
		status.setAttribute("class", "btn btn-outline-primary")
		e.setAttribute("class", "btn btn-outline-primary active")
		for (let i = 0; i < li.length; i++) {
			li[i].setAttribute("class", "todo list-group-item d-flex align-items-center")
			if (e.id === "todo" && li[i].id === "true")
				li[i].setAttribute("class", "hide")
			else if (e.id === "done" && li[i].id === "false")
				li[i].setAttribute("class", "hide")
		}
	}
}

function createNode(title) {
	const ul = document.querySelector("ul")
	const li = document.createElement("li")
	li.setAttribute("class", "todo list-group-item d-flex align-items-center")
	li.setAttribute("id", "false")
	
	const input = document.createElement("input")
	input.setAttribute("class", "form-check-input")
	input.setAttribute("type", "checkbox")
	input.setAttribute("id", `todo-${len + 1}`)
	input.addEventListener("change", function (e) {
		const status = document.querySelector(".active").id
		e.currentTarget.parentElement.setAttribute("id", e.target.checked)
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
	if (document.querySelector(".active").id == "done")
		li.setAttribute("class", "hide")
	ul.appendChild(li)
	len++
}
