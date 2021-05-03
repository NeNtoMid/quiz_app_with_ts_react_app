import React from 'react';

import { ThemeProvider } from 'styled-components';

import useApp from './hooks/useApp';

import theme from './theme/theme';

import GlobalStyles from './theme/globalStyles';

import Header from './components/Header/Header';

import Questions from './components/Questions/Questions';

const App = () => {
	const {
		questions,
		loading,
		handleChangeQuestionNum,
		handleStartAndFetchQuiz,
	} = useApp();
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header
				score={questions.score}
				startQuiz={handleStartAndFetchQuiz}
				clicked={questions.clicked}
			/>
			<Questions
				questions={questions}
				changeQuestion={handleChangeQuestionNum}
				loading={loading}
			/>
		</ThemeProvider>
	);
};

export default App;
