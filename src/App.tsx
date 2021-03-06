import React from 'react';

import { ThemeProvider } from 'styled-components';

import useApp from './hooks/useApp';

import theme from './theme/theme';

import GlobalStyles from './theme/globalStyles';

import Header from './components/Header/Header';

import Question from './components/Question/Question';

const App = () => {
	const {
		questions,
		loading,
		handleChangeQuestion,
		handleStartAndFetchQuiz,
	} = useApp();
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header
				score={questions.score}
				startQuiz={handleStartAndFetchQuiz}
				isStarted={questions.isStarted}
			/>
			<Question
				questions={questions}
				changeQuestion={handleChangeQuestion}
				loading={loading}
			/>
		</ThemeProvider>
	);
};

export default App;
