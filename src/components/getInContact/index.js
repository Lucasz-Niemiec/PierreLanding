import React from "react";
import { Container, WhaIcon, ContinerLinks } from "./getInContact.styled";
const GetInContact = () => {
	return (
		<Container>
			<p>
				¿Tienes un Proyecto/ Curso que te gustaría impulsar?
				<a href="mailto:centroprofesionalpierre@gmail.com">
					Queres ser parte del equipo?
				</a>
				Envíanos un correo con tu nombre, area de interes y adjuntando tu cv a
				nuestro mail.
			</p>
			<a href="mailto:centroprofesionalpierre@gmail.com">
				centroprofesionalpierre@gmail.com
			</a>

			<ContinerLinks>
				<p>o madanos un mensaje </p>
				<a
					href="https://wa.me/5493885805741?text=Hola%20Me interesa%20estudiar/%20trabajar%20en%20pierre"
					target="_blank"
				>
					<WhaIcon />
				</a>
			</ContinerLinks>
		</Container>
	);
};

export default GetInContact;
