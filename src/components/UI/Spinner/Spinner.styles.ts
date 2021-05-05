import styled from 'styled-components';

export const Spinner = styled.div`
	&,
	&:after {
		border-radius: 50%;
		width: 10em;
		height: 10em;
	}

	margin: 6rem auto;
	font-size: 1rem;
	position: relative;
	text-indent: -9999em;
	border-top: 1.1em solid rgba(112, 112, 112, 0.2);
	border-right: 1.1em solid rgba(112, 112, 112, 0.2);
	border-bottom: 1.1em solid rgba(112, 112, 112, 0.2);
	border-left: 1.1em solid #707070;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: load8 1.1s infinite linear;
	animation: load8 1.1s infinite linear;

	@keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
