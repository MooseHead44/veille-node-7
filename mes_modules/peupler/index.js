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
    position = Math.floor(Math.random()*tableau.courriel.length)
    personneTab[k]['courriel'] = personneTab[k]["prenom"] + "." + personneTab[k]["nom"] + "@" + tableau.courriel[position];
	
    let telephone = "";

    for (var i = 0; i < 10; i++) {
      
      chiffre = Math.floor(Math.random()*10);
      telephone += chiffre;

    }

    personneTab[k]['telephone'] = telephone;

  }

  return(personneTab)
}


module.exports = peupler_json