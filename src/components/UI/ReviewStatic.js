// @flow
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  <ReviewsContainer>
    {[...Array(5).keys()].map(num =>
      <Icon
        key={num}
        name={iconName}
        colorName={rate >= num ? colorName : 'grey'}
      />
    )}
  </ReviewsContainer>
);

export default ReviewsStatic;
