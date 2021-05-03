import styled from 'styled-components';

export const Article = styled.article`
	text-align: center;
	display: grid;
	grid-template-columns: 1fr;
	background: rgb(235, 254, 255) none repeat scroll 0% 0%;
	border: 2px solid rgb(0, 133, 163);
	padding: 5rem 2rem 3rem 2rem;
	border-radius: 1rem;
	grid-gap: 1.5rem;

	h3 {
		font-size: 2rem;
	}
	p {
		font-size: 1.6rem;
		padding: 1rem 0;
	}
`;

interface ButtonProps {
	correctAnswer: string;
	chosen?: string;
	index: number;
	correctAnswerIsSelected: boolean | undefined;
	answer: string;
}

export const Button = styled.button<ButtonProps>`
	background: rgba(0, 0, 0, 0)
		linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180)) repeat scroll
		0% 0%;
	color: ${({
		theme: {
			colors: {
				common: { white },
			},
		},
	}) => white};

	border: 3px solid
		${({
			theme: {
				colors: {
					common: { white },
				},
			},
		}) => white};
	padding: 1rem 0;
	border-radius: 1rem;

	font-weight: 700;
	cursor: pointer;

	background: ${({
		correctAnswerIsSelected,
		correctAnswer,
		answer,
		chosen,
		index,
	}: ButtonProps) => {
		if (correctAnswer === answer && correctAnswerIsSelected !== undefined) {
			return 'green';
		}

		if (chosen === index.toString()) {
			return 'red';
		}
	}};
`;
