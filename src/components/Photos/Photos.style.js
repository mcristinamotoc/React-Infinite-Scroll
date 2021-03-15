import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";

export const StyledCard = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax( 15.625rem, 1fr));
  grid-auto-rows: 18.75rem;


  @media only screen and (max-width: 468px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1em;
    grid-auto-rows: 18.75rem;
    margin: auto;
	}
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${keyframes`${fadeIn}`} 5s
 `; 
