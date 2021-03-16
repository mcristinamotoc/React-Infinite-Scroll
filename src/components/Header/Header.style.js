import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  left: 0px; 
  opacity: 1;
  max-width: 80%;
  height: 5rem;
  margin: 2rem auto;
  border: 5px solid #CCEEFF;
  font: bold normal normal 1.6rem/2rem Helvetica Neue;
  background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
 
  @media only screen and (max-width: 468px) {
		padding-bottom: 3rem;
		padding-top: 3rem;
		padding-left: 3rem;
		padding-right: 3rem;
	}
 `;