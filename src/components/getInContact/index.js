import React from "react";
import { Container, WhaIcon, ContinerLinks } from "./getInContact.styled";
const GetInContact = () => {
	return (
		<Container>
			<ContinerLinks>
				<p>Envianos tus datos y CV</p>
				<a
					href="https://wa.me/5493884778611?text=Hola%20Te damos la bienvenida a Centro Profesional Pierre _Nos alegra que quieras sumarte a nuestro Equipo de Profesionales_ *A continuación Adjúntanos tu C.V. y lo enviaremos al área correspondiente!*%20"
					rel="noreferrer"
					target="_blank"
				>
					<WhaIcon /> <span>WhatsApp</span>
				</a>
			</ContinerLinks>
			<p>
				¿Tienes un Proyecto/ Curso que te gustaría impulsar? Envíanos un correo
				con tu nombre, area de interes y adjuntando tu cv a nuestro mail.
			</p>
			<a href="mailto:centroprofesionalpierre@gmail.com">
				centroprofesionalpierre@gmail.com
			</a>
		</Container>
	);
};

export default GetInContact;
