import styled from 'styled-components';

const StyledCard = styled.div`
  > p {
    font-size: 1.42em;
    opacity: 0.6;
  }
  > h2 {
    margin: ${({ theme: { whitespaceM } }) => whitespaceM} 0;
  }
`;

const SectionContainer = styled.div`
  > h4 {
    margin: ${({ theme: { whitespaceS } }) => whitespaceS} 0;
  }
  > p {
    margin: 0 0 ${({ theme: { whitespaceS }}) => whitespaceS};
    text-transform: capitalize;
    font-size: 1.42em;
    opacity: 0.6;
  }
`;


export { StyledCard, SectionContainer };