import React from "react";
import { StyledIcon } from "./whatsButton.styled";

function WhatsAppButton({ position }) {
	return (
		<div>
			{" "}
			<a
				href="https://wa.me/5493885070493?text=Hola%20Me interesa%20estudiar/%20trabajar%20en%20pierre"
				target="_blank"
				rel="noreferrer"
			>
				<StyledIcon style={{ position }} title="chat in whatsapp"></StyledIcon>
			</a>
		</div>
	);
}

export default WhatsAppButton;
