import 'styled-components';
interface IPalette {
	main: string;
	contrastText: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			mainBlue: string;
			common: {
				white: string;
				black: string;
			};
		};
		up: (breakpoint: number, vertical: boolean) => string;
		down: (breakpoint: number, vertical: boolean) => string;
		between: (
			breakpoint: number,
			breakpointMax: number,
			vertical: boolean
		) => string;
	}
}
