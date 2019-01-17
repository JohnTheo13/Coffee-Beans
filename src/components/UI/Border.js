import styled from 'styled-components';

const Border = styled.div`
  border-bottom: 1px solid ${({ theme: { grey }}) => grey};
  margin-bottom: ${({ theme: { whitespaceS }}) => whitespaceS};
`;

export default Border;
