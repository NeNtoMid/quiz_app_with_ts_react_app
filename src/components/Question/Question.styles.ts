import styled from 'styled-components';

export const Main = styled.main`
	display: grid;
	place-items: center;
	${({ theme }) => theme.down(600, false)} {
		padding: 0 5%;
	}
`;
