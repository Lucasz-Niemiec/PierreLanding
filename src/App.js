import NavBar from "./components/nav/NavBar";
import SectionConatct from "./components/SectionContact/SectionConatct";
import JobsSection from "./components/JobsSection/JobsSection";
import WhatsAppButton from "./components/WhatsApp";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./generalStyes/GlobalStyles";
import Theme from "./generalStyes/themePropvider";
function App() {
	return (
		<Theme>
			<>
				<GlobalStyles />
				<NavBar></NavBar>
				<WhatsAppButton />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Jobs" element={<JobsSection />} />
				</Routes>
				<SectionConatct></SectionConatct>
			</>
		</Theme>
	);
}

export default App;
