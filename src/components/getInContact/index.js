import React from "react";
import { Container, WhaIcon, ContinerLinks } from "./getInContact.styled";
const GetInContact = () => {
	return (
		<Container>
			<p>
				¿Tienes un Proyecto/ Curso que te gustaría impulsar? Envíanos un correo
				con tu nombre, area de interes y adjuntando tu cv a nuestro mail.
			</p>
			<a href="mailto:centroprofesionalpierre@gmail.com">
				centroprofesionalpierre@gmail.com
			</a>

			<ContinerLinks>
				<p>Envianos tus datos y CV</p>
				<a
					href="https://wa.me/5493884778611?text=Hola%20me interesa%20estudiar/%20trabajar%20en%20pierre"
					rel="noreferrer"
					target="_blank"
				>
					<WhaIcon />
				</a>
			</ContinerLinks>
		</Container>
	);
};

export default GetInContact;
