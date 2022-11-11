/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   lib.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adeburea <adeburea@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/11 18:44:33 by adeburea          #+#    #+#             */
/*   Updated: 2022/11/11 19:08:45 by adeburea         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


class Book {
	constructor (name, pages) {
		this._name = name
		this._pages = pages
		this._page = 1
	}
	get page () {
		return this._page
	}
	nextPage () {
		if (this._page < this._pages)
			this._page++
	}
	close () {
		this._page = 1
	}
}

class Library {
	#books = []
	addBook (book) {
			this.#books.push(book)
	}
	addBooks (books) {
		this.#books.push(...books)
	}
	get booklist () {
		return this.#books
	}
	findBooksByLetter (l) {
		let books = []
		for (let i = 0; i < this.#books.length; i++) {
			if (this.#books[i]._name[0].toUpperCase() === l.toUpperCase())
				books.push(this.#books[i])
		}
		return books
	}
}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('L'))
