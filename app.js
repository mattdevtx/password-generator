'use strict'

const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'!',
	'@',
	'#',
	'$',
	'%',
	'&',
	'*',
	'(',
	')',
	'?',
	'^',
	':',
	'[',
	']',
	'{',
	'}',
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
]

const displayPass = document.querySelector('.password')
const generateBtn = document.querySelector('.generate-btn')

const mid = document.getElementById('mid')
const low = document.getElementById('low')
const high = document.getElementById('high')

if (low.checked) {
  mid.checked = false
}

generateBtn.addEventListener('click', () => {
	const passWord = function (array) {
		let secureLevel
    if (low.checked) {
      secureLevel = 1
    }
		if (mid.checked) {
			secureLevel = 3
		}
    if (high.checked) {
      secureLevel = 5
    }

		let newPass = ''
		for (let i = 0; i < secureLevel; i++) {
			let randoChar = Math.floor(Math.random() * characters.length - 1) + 1
			newPass += `${array[randoChar]}`
		}
		return newPass
	}
	let pass = passWord(characters)
	displayPass.textContent = pass
})
