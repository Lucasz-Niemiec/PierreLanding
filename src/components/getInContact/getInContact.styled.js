import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { pulsating } from "../../generalStyes/themePropvider";

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
	width: fit-content;
	align-self: center;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	font-size: 3em;
	p {
		font-size: 2em;
		width: fit-content;
	}
	a {
		display: flex;
		align-items: center;
	}
	@media screen and (max-width: 1000px) {
		width: 100%;
	}
	a {
		display: inline-block;
	}
	p {
		font-size: 1em;
	}
	@media screen and (max-width: 1000px) {
		p {
			font-size: 0.6em;
		}
	}
`;

export const WhaIcon = styled(BsWhatsapp)`
	width: 80px;
	height: 80px;
	color: ${({ theme }) => theme.primary};
	font-size: 2rem;
	font-weight: 700;
	padding: 10px;
	animation: ${pulsating};
	animation-duration: 3s;
	animation-iteration-count: infinite;
`;
export const Arrow = styled(BsFillArrowRightCircleFill)`
	width: 90px;
	height: 90px;
	color: ${({ theme }) => theme.secondary_2};
	padding: 20px;
`;
