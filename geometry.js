/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   geometry.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adeburea <adeburea@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/11 18:28:34 by adeburea          #+#    #+#             */
/*   Updated: 2022/11/11 18:44:00 by adeburea         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class Rectangle {
	constructor (x, y) {
		this._x = x
		this._y = y
	}
	get perimeter () {
		return this._x * 2 + this._y * 2
	}
	get isValid () {
		return this._x > 0 && this._y > 0
	}
	isBiggerThan (rhs) {
		return rhs.perimeter < this.perimeter
	}
}

class Square extends Rectangle {
	constructor (x) {
		super(x, x)
	}
	get isValid () {
		return super.isValid
	}
}

const r = new Rectangle(10, 20);
console.log(r.perimeter) // 60
console.log(r.isValid) // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid) // false
const c = new Square(20); 
console.log(c.perimeter) // 40
console.log(r.isBiggerThan(c)) // true
