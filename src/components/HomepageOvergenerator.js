import React from "react";
import { Link } from "react-router-dom";
import logo_vvoj from "../assets/logo_vvoj.png";

function HomepageOvergenerator() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock2">
				<div className="block1">
					<h1>Over deze generator</h1>
					<p>
						De Woo-generator is een project van de Woo-werkgroep van de Vlaams-Nederlandse Vereniging van
						Onderzoeksjournalisten (
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) en financieel mogelijk gemaakt door{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Stichting Lira
						</a>
						. Ontwikkeling:{" "}
						<a
							className="plaintext"
							href="https://www.linkedin.com/in/tove-oegema-36107311b"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tove Oegema{" "}
						</a>{" "}
						(Research Assistant) en{" "}
						<a className="plaintext" href="https://www.paulienbouw.nl/" target="_blank" rel="noopener noreferrer">
							Paulien Bouw
						</a>
						. Inhoud: onderzoeksjournalisten{" "}
						<a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer">
							Liset Hamming
						</a>{" "}
						en{" "}
						<a
							className="plaintext"
							href="https://www.platform-investico.nl/personen/tim-staal/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tim Staal
						</a>{" "}
						namens de VVOJ.
					</p>
					<br />
					<br />
					<p>
						De Woo-werkgroep van de VVOJ beheert de website. De website is op geen enkele manier verbonden aan de
						Nederlandse overheid en is volstrekt onafhankelijk.
					</p>
					<br></br>
					<p>
						Voor vragen en opmerkingen:{" "}
						<a href="mailto:woo-generator@vvoj.org" className="plaintext">
							woo-generator@vvoj.org
						</a>
					</p>
					<div className="spanLinks">
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							<img src={logo_vvoj} className="logo_vvoj" alt="VVOJ" />
						</a>
					</div>
					<div className="spanLinks">
						<Link to="/PrivacyVoorwaarden">Privacybeleid</Link>
					</div>
				</div>
				<div className="projectTeam">
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
export default HomepageOvergenerator;
