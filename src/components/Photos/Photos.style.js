import styled from "styled-components";

export const StyledCard = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax( 15.625rem, 1fr));
  grid-auto-rows: 18.75rem;
  transition: 0.3s;    
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

