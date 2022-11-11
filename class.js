/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   class.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adeburea <adeburea@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/11 17:37:21 by adeburea          #+#    #+#             */
/*   Updated: 2022/11/11 18:16:41 by adeburea         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const average = (notes) => {
	let sum = 0
	for (let i = 0; i < notes.length; i++)
		sum += notes[i]
	return sum / notes.length
}

class Student {
	school = 'Jules Ferry'
	_notes = []

	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
	}
	set notes (v) {
		if (Array.isArray())
			this._notes = v
	}
	get name () {
		return `${this.firstname} ${this.lastname}`
	}
	setNotes (notes) {
		this._notes = notes
	}
	canPass () {
		return average(this._notes) >= Student.av
	}

	static av = 10
}

class SuperStudent extends Student {
	canPass () {
		return true
	}
	get name () {
		return 'Super ' + super.name
	}
	constructor (firstname, lastname, notes) {
		super(firstname, lastname)
		super._notes = notes
	}
}

const jhon = new SuperStudent('Jhon', 'Doe', [ 10, 2, 9, 11 ])
const jane = new Student('Jane', 'Doe')

jane._notes = [ 18, 15, 16, 20]
console.log(`${jhon.name} ${jhon.canPass() ? 'can pass' : 'have to retry'}`)
console.log(`${jane.name} ${jane.canPass() ? 'can pass' : 'have to retry'}`)
