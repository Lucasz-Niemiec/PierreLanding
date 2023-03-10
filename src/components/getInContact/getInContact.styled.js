import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

export const Container = styled.div`
	align-self: center;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	width: 50%;
	height: 50%;
	a {
		color: ${({ theme }) => theme.primary};
		font-size: 1.7rem;
		font-weight: 700;
		display: inline-block;
		text-align: center;
	}
	p {
		width: 100%;

		display: inline;
	}
	span {
		display: inline;
		color: ${({ theme }) => theme.primary};
		font-weight: 700;
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
		a {
			font-size: 1.2rem;
			font-weight: 700;
		}
	}
`;

export const ContinerLinks = styled.div`
	width: 65%;
	align-self: center;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-size: 2em;
		width: 90%;
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
	}

	a {
		display: flex;
		align-items: center;
	}
`;

export const WhaIcon = styled(BsWhatsapp)`
	width: 80px;
	height: 80px;
	color: ${({ theme }) => theme.primary};
	font-size: 2rem;
	font-weight: 700;
	padding: 10px;
`;
