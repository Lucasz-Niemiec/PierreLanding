import React from "react";
import items from "../../jobs.json";
import JobOffer from "../JobOffer/JobOffer";
import { Wrapper, JobContainer } from "./JobsSection.Styled";
import GetInContact from "../getInContact";

const JobsSection = () => {
	return (
		<Wrapper>
			<h1>Ofertas trabajo</h1>
			<p>
				Bienvenido a nuestra sección de búsqueda de talentos en Centropierre.
				Estamos buscando personas talentosas para unirse a nuestro equipo en
				diferentes áreas, como enseñanza, asesoramiento, investigación y
				administración. Valoramos la diversidad y la inclusión, y ofrecemos un
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
