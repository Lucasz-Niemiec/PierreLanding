import React from "react";
import items from "../../jobs.json";
import JobOffer from "../JobOffer/JobOffer";
import { Wrapper, JobContainer } from "./JobsSection.Styled";
import GetInContact from "../getInContact";

const JobsSection = () => {
	return (
		<Wrapper>
			<h1>Oferta laboral</h1>
			<a href="mailto:centroprofesionalpierre@gmail.com">
				¿Te gustaría formar parte de nuestro equipo de profesionales?
			</a>
			<p>
				Bienvenido a nuestra sección de búsqueda de talentos en Centropierre.
				Estamos buscando personas talentosas para unirse a nuestro equipo en
				diferentes áreas, como enseñanza, asesoramiento, investigación y
				administración. Valoramos el compromiso y la proactividad, y ofrecemos
				un un execelente ámbito laboral
			</p>
			<JobContainer>
				{items &&
					items.map((item) => (
						<JobOffer key={item.key} content={item.content}></JobOffer>
					))}
			</JobContainer>
			<GetInContact />
		</Wrapper>
	);
};

export default JobsSection;
