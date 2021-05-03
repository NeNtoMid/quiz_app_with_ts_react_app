import styled from 'styled-components';

export const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	grid-gap: 5rem;

	h1 {
		text-transform: uppercase;
		font-family: 'Fascinate Inline', cursive;
		font-size: 7rem;
		text-align: center;
		background-image: linear-gradient(
			${({
				theme: {
					colors: {
						common: { white },
					},
				},
			}) => white},
			${({
				theme: {
					colors: { mainBlue },
				},
			}) => mainBlue}
		);
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(rgb(0, 133, 163) 2px 2px);

		font-weight: 400;
	}

	h2 {
		color: ${({
			theme: {
				colors: {
					common: { white },
				},
			},
		}) => white};
		font-size: 3rem;
	}

	button {
		border: 2px solid rgb(211, 133, 88);
		background: rgba(0, 0, 0, 0)
			linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145)) repeat scroll 0%
			0%;
		padding: 1rem 5rem;
		color: ${({
			theme: {
				colors: {
					common: { black },
				},
			},
		}) => black};
		font-family: 'Catamaran', sans-serif;
		border-radius: 1rem;
		cursor: pointer;
		outline: none;
	}
`;
