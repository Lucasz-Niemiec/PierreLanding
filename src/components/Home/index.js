import React from "react";
import About from "../about/About";
import Courses from "../courses section/Courses";
import { useRef } from "react";
const Home = () => {
	const coursesRef = useRef(null);
	const scrollToCourses = () => {
		coursesRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<About scrollToCourses={scrollToCourses}></About>
			<Courses ref={coursesRef} />
		</>
	);
};

export default Home;
