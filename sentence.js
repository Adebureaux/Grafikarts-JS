/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sentence.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adeburea <adeburea@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/11 18:28:46 by adeburea          #+#    #+#             */
/*   Updated: 2022/11/11 18:28:47 by adeburea         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const sentence = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`

const splited = sentence
.toLowerCase()
.replace(/[^a-zà-ú0-9 ]/gi, '')
.split(' ')

const count = splited.reduce((accumulator, value) => {
return {...accumulator, [value]: (accumulator[value] || 0) + 1}
}, {})

const sorted = Object.entries(count)
    .sort(([,a],[,b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

let i = 0
for (let sort in sorted) {
	console.log(`${i}: '${sort}' with ${sorted[sort]} occurences`)
	if (i++ > 1)
		break
}
 