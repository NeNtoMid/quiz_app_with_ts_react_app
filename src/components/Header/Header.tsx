import React from 'react';

import * as Styles from './HeaderStyle';

interface HeaderProps {
	score: number;
	startQuiz: () => void;
	clicked: boolean;
}

const Header = ({ score, startQuiz, clicked }: HeaderProps) => {
	return (
		<Styles.Header>
			<h1>React Quiz</h1>
			{clicked ? (
				<h2>Score : {score}</h2>
			) : (
				<button onClick={startQuiz}>Start</button>
			)}
		</Styles.Header>
	);
};

export default Header;
