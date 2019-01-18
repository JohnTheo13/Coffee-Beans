// @flow
import React from 'react';
import RatingContaiter from './RatingContaiter';
import Icon from './Icon';

type ReviewType = {
  rate: 0 | 1 | 2 | 3 | 4,
  colorName?: string,
  iconName: string
};

/**
 * @param {*} rate must be <= 4 
 */

const ReviewsStatic = ({ rate, colorName, iconName }: ReviewType) => (
  <RatingContaiter>
    {[...Array(5).keys()].map(num =>
      <Icon
        key={num}
        name={iconName}
        colorName={rate >= num ? colorName : 'grey'}
      />
    )}
  </RatingContaiter>
);

export default ReviewsStatic;
