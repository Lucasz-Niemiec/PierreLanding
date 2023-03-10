import React from "react";
import { StyledIcon } from "./whatsButton.styled";

export const wahtsappLink =
	"https://wa.me/5493884778611?&text=Te%20damos%20la%20bienvenida%20a%20Centro%20Profesional%20Pierre%20Nos%20alegra%20que%20quieras%20sumarte%20a%20nuestro%20Equipo%20de%20Profesionales%20A%20continuación%20Adjúntanos%20tu%20C.V.%20y%20loe%20nviaremos%20al%20área%20correspondiente!";

function WhatsAppButton({ position }) {
	return (
		<div>
			{" "}
			<a href={wahtsappLink} rel="noreferrer" target="_blank">
				<StyledIcon style={{ position }} title="chat in whatsapp"></StyledIcon>
			</a>
		</div>
	);
}

export default WhatsAppButton;
