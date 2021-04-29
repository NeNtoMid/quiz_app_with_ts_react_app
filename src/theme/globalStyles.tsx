import { createGlobalStyle } from 'styled-components';

import backgroundImg from './../assets/images/background.jpg';

const globalStyles = createGlobalStyle`
*,*::before,*::after {
    margin:0;
    padding:0;
    box-sizing:inherit;
}

html {
    font-size:62.5%;
}
body {
    width:100%;
    height:100vh;
    line-height:1.7;
    box-sizing:border-box;
    background-image: url(${backgroundImg} );
    background-size:cover;
    background-repeat:no-repeat;

    font-family: 'Catamaran', sans-serif;
/* font-family: 'Fascinate Inline', cursive; */


    #root {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 3rem;
        grid-auto-rows:1fr 2fr;
	}                       


    &::-webkit-scrollbar {
			width: 10px;
			background-color: ${({
				theme: {
					colors: {
						common: { white },
					},
				},
			}) => white};
			border-radius: 0 11px 11px 0;
		}

	&::-webkit-scrollbar-thumb {
			background: ${({
				theme: {
					colors: { mainBlue },
				},
			}) => mainBlue};
			border-radius: 11px;
	}
}

`;

export default globalStyles;
