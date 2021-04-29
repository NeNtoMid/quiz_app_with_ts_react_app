import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme/theme';

import GlobalStyles from './theme/globalStyles';

import Header from './components/Header/Header';

import Questions from './components/Questions/Questions';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Questions />
		</ThemeProvider>
	);
};

export default App;
