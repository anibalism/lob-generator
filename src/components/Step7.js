import React, { Component, useState } from "react"
import LetterUI from "./LetterUI"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Step7({value, changeHandlerUser, changeHandlerCheckbox, filteredDataText}){
	return(
			<div>
			<h2>Welke informatie zoek je?</h2>
			<p>Begin met het kort en bondig omschrijven van het onderwerp waarover je informatie vraagt. Let op: je kunt alleen informatie over overheidstaken opvragen. <button>ietje</button></p>
			<p>Omschrijf je onderwerp eerst in enkele trefwoorden, dit komt bovenaan de brief te staan. Omschrijf vervolgens je onderwerp in een of enkele zinnen. Dit komt in de lopende tekst van je brief.</p>	
				 <form>
				 	
				 	<label> Onderwerp in trefwoorden (verplicht)
			           <input value={value.subjectShort} onChange={changeHandlerUser} id="subjectShort" type="text" name="subjectinfo" placeholder="trefwoord 1" /><br/>
			        </label>
			        <label> Onderwerp in lopende tekst (verplicht)
			           <input value={value.subjectLong} onChange={changeHandlerUser}id="subjectLong" type="text" name="subjectinfo" placeholder="Vul hier je onderwerp kort en bondig in, bijvoorbeeld 'boetes voor snelheidsovertredingen in Friesland'  "/><br/>
			        </label>
			        <label>
			        	<input onChange={changeHandlerCheckbox} id="subjectMilieu" type="checkbox" checked={value.subjectMilieu} name="subjectInfo" value="subjectMilieu" /> Dit onderwerp gaat over milieu<br/>
			        </label>   
      			 </form>	
      			
				<Link to="/Step6">vorige pagina</Link>
				<Link to="/Step8">volgende pagina</Link>
				 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
			</div>
		)
}
export default Step7