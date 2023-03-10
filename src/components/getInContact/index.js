import React from "react";
import { wahtsappLink } from "../WhatsApp";
import {
	Container,
	WhaIcon,
	ContinerLinks,
	Arrow,
} from "./getInContact.styled";
const GetInContact = () => {
	return (
		<Container>
			<ContinerLinks>
				<p>Envianos tus datos y CV</p>
				<Arrow />
				<a href={wahtsappLink} rel="noreferrer" target="_blank">
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
