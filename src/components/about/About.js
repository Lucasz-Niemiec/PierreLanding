import React, { useState } from "react";
import HeroImage from "../heroImage/HeroImage";
import {
	Wrapper,
	Content,
	Text,
	BackTriangles,
	CallToAct,
} from "./about.styled";

const About = ({ scrollToCourses }) => {
	return (
		<Wrapper>
			<Content>
				<Text>
					<h1>Formando Verdaderos PROFESIONALES</h1>
					<p>
						Nuestra misión es brindar las más actualizadas herramientas a todas
						las personas que deseen superar sus habilidades en la industria de
						la belleza.
					</p>
					<CallToAct onClick={scrollToCourses}>
						chequea nuestors cursos
					</CallToAct>
				</Text>
				<HeroImage />
			</Content>

			<BackTriangles />
		</Wrapper>
	);
};

export default About;
