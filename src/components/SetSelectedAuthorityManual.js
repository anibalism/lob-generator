import React from "react";

function SetSelectedAuthorityManual({ value: { selectedAuthority }, setAuthorityComplete, handleKeypathChange }) {
	return (
		<div>
			<div>
				<p>Vul hier de gegevens in van de instantie waar je je verzoek aan wilt richten.</p>
				<form>
					<span>
						<label>
							Naam instantie
							<input
								size="50"
								type="text"
								name="selectedAuthority.Bestuursorgaan"
								onChange={handleKeypathChange}
								value={selectedAuthority.Bestuursorgaan}
							/>
						</label>
					</span>
					<span>
						<label>
							Adres
							<input
								size="40"
								type="text"
								name="selectedAuthority.Postbus"
								value={selectedAuthority.Postbus}
								onChange={handleKeypathChange}
							/>
						</label>
					</span>

					<span>
						<label>
							Postcode
							<input
								size="15"
								onChange={handleKeypathChange}
								name="selectedAuthority.Postcode"
								type="text"
								value={selectedAuthority.Postcode}
							/>
						</label>
						<label>
							Plaats
							<input
								size="30"
								onChange={handleKeypathChange}
								type="text"
								name="selectedAuthority.Plaats"
								value={selectedAuthority.Plaats}
							/>
						</label>
					</span>
				</form>
			</div>
		</div>
	);
}

export default SetSelectedAuthorityManual;
