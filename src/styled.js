import styled, { css, createGlobalStyle } from "styled-components";

const desktopStartWidth = 996;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Cuadrado = styled.div`
width:70px;
height:70px;
background-color:pink;
${mobile}{
    width:100%
}
&:hover{
    background-color: purple;
}
`;

export const Rectangulo = styled(Cuadrado)`
width:200px;
`;

export const Component = styled.div`
background-color: ${({ isRight }) => isRight ? 'green' : 'red'};
`;

export const Input = styled.input.attrs(props => ({
    type: "password",
    maxLength: props.myMaxLength || 5,
}))`
color:blue;
`;

const BigText = css`
	font-size: 3rem;
`;

export const RedText = styled.p`
	background: red;
	${BigText};
`;

export const BlueText = styled.p`
	background: blue;
	${BigText}
`;

export const GlobalStyle = createGlobalStyle`
	body {
		background-color: salmon;
        margin:0;
	}
`;