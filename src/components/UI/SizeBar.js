// @flow
import React from 'react' ;
import styled from 'styled-components'
import FlexContainer from './FlexContainer';
import Icon from './Icon';

const Extended = styled(FlexContainer)`
  font-size: .65em;
  width: 42%;
  > i {
    margin: auto;
  }
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

const SizeBar = ({ iconName, rate, colorName }: BarType) => (
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
