"use strict"
const tableau  = require('./tableaux.js')


const peupler_json = () => {

  let position, chiffre 
  let personneTab = []
  for (let k=0 ; k<10; k++) {

    personneTab[k] = {};

		position = Math.floor(Math.random()*max)
		personneTab[k]['prenom'] = tableaux.prenom[position];
	
  }

  return(personneTab)
}


module.exports = peupler_json