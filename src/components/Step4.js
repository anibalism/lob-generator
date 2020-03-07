import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step4({ value, clickHandlerAuthority, clickHandlerClearSelectedAuthority, authorities }) {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div>
				<h2>Welke overheidsinstantie wil je om informatie vragen?</h2>
				<p>Wob-verzoeken kunnen alleen bij overheidsinstanties worden</p><PopupButton number="5" />
				<form>
						<input id="searchBarAuthority" type="search" value={searchValue} placeholder="zoek op naam of plaats" onChange={event=>setSearchValue(event.target.value)}/>
						{value.selectedAuthority?
							 	<div>
							 		<p>Controleer de instantie aan wie je Wobt</p>	
							 		<p>{value.selectedAuthority.types}</p>
						       		<p>{value.selectedAuthority.naam}</p>
						       		<p>{value.selectedAuthority.url}</p>
									{value.selectedAuthority.adres?<p>{value.selectedAuthority.adres.postbus??value.selectedAuthority.adres.straat + " " + value.selectedAuthority.adres.huisnummer}</p>:<p>Er is helaas geen adres bekend bij ons, beschik je zelf wel over een adres van deze instantie, dan kun je het invoeren zodra je de brief als .doc hebt gedownload</p>}
									<p>{value.selectedAuthority.adres.postcode + " " + value.selectedAuthority.adres.plaats}</p>
									<p>{value.selectedAuthority.value}</p>
									<div>
										<button type="button" onClick={()=>{setSearchValue("");clickHandlerClearSelectedAuthority(value.selectedAuthority)}}>zoek opnieuw</button>
									</div>
								</div>
								:
						<ul id="authorities">
							
							{authorities.filter(item=>item.naam.toLowerCase().includes(searchValue.toLowerCase())||
												   item.adres?.plaats?.toLowerCase().includes(searchValue.toLowerCase())||
												   item.types.some(type=>type.toLowerCase().includes(searchValue.toLowerCase()))
													).map(item => (	
							<li key={item.systemid}><button type="button" onClick={()=>clickHandlerAuthority(item)}><p>{item.naam}</p><p>{item.postAdres?.plaats||item.bezoekAdres?.plaats}</p><p>{item.types}</p></button></li>	                      
					          ))} 
				      	</ul>
				      }
	      		 </form>
	      		 <p>Hoe kies ik de juiste overheidsinstantie?</p><PopupButton number="6" />
	      		 <p>Aan wie adresseer ik mijn verzoek?</p><PopupButton number="7" />
				<Link to="/Step3">vorige pagina</Link>
				<Link to="/Step5">volgende pagina</Link>
			</div>
    )
}
export default Step4