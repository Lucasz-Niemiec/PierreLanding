import React from "react";
import { StyledIcon } from "./whatsButton.styled";

function WhatsAppButton({ position }) {
	return (
		<div>
			{" "}
			<a
				href="https://wa.me/5493884778611?text=Hola%20Te damos la bienvenida a Centro Profesional Pierre _Nos alegra que quieras sumarte a nuestro Equipo de Profesionales_ *A continuación Adjúntanos tu C.V. y lo enviaremos al área correspondiente!*%20"
				rel="noreferrer"
				target="_blank"
			>
				<StyledIcon style={{ position }} title="chat in whatsapp"></StyledIcon>
			</a>
		</div>
	);
}

export default WhatsAppButton;
