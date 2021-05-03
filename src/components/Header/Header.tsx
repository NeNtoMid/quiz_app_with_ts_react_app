import React from 'react';

import * as Styles from './HeaderStyle';

interface HeaderProps {
	score: number;
	startQuiz: () => void;
	isStarted: boolean;
}

const Header = ({ score, startQuiz, isStarted }: HeaderProps) => {
	return (
		<Styles.Header>
			<h1>React Quiz</h1>
			{isStarted ? (
				<h2>Score : {score}</h2>
			) : (
				<button onClick={startQuiz}>Start</button>
			)}
		</Styles.Header>
	);
};

export default Header;
