// @flow
import React from 'react';
import styled from 'styled-components';
import FlexContainer from './FlexContainer';
import Icon from './Icon';

const ReviewContainer = styled(FlexContainer)`
  width: 42%;
  i {
    font-size: ${({ theme: { whitespaceM }}) => whitespaceM}
  }
`;

type ReviewType = {
  rate: 0 | 1 | 2 | 3 | 4,
  colorName?: string,
  iconName: string
};

/**
 * @param {*} rate must be <= 4 
 */

const ReviewsStatic = ({ rate, colorName, iconName }: ReviewType) => (
  <ReviewContainer>
    {[...Array(5).keys()].map(num =>
      <Icon
        key={num}
        name={iconName}
        colorName={rate >= num ? colorName : 'grey'}
      />
    )}
  </ReviewContainer>
);

export default ReviewsStatic;
