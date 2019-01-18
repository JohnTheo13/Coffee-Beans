// @flow
import React from 'react' ;
import styled from 'styled-components'
import RatingContaiter from './RatingContaiter';
import Icon from './Icon';

const Extended = styled(RatingContaiter)`
  font-size: .65em;
`;

type BarType = {
  iconName: string,
  rate: 0 | 1 | 2 | 3,
  colorName: string
}

/**
 * 
 * @param {*} rate <= 3 
 */

const SizeBar = ({ iconName, rate, colorName }) => (
  <Extended>
    {[...Array(4).keys()].map(num => 
      <Icon
        key={num}
        name={iconName}
        size={num > 0 ? `${1 + num}x` : 'lg'}
        colorName={num === rate ? colorName : 'grey'}
      />
    )}
  </Extended>
);

export default SizeBar;
