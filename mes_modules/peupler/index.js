"use strict"
const tableau  = require('./tableaux.js')


const peupler_json = () => {

  let position, chiffre 
  let personneTab = []
  for (let k=0 ; k<10; k++) {

    personneTab[k] = {};

		position = Math.floor(Math.random()*tableau.prenom.length)
		personneTab[k]['prenom'] = tableau.prenom[position];
    position = Math.floor(Math.random()*tableau.nom.length)
    personneTab[k]['nom'] = tableau.nom[position];
    position = Math.floor(Math.random()*tableau.prenom.length)
    personneTab[k]['prenom'] = tableau.prenom[position];
	
  }

  return(personneTab)
}


module.exports = peupler_json