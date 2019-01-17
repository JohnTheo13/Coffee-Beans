// @flow
import React from 'react';
import styled from 'styled-components';

type IconType = {
    name: string,
    size?: string,
    colorName?: string,
    onClick?: Function
  };

const Styled = styled.i`
  color: ${({theme, colorName}) => theme[colorName]}
`;

const Icon = ({size = '', name, onClick, colorName}: IconType) => (
    <Styled className={`fas fa-${name} fa-${size}`} colorName={colorName} onClick={onClick} />
);

export default Icon;
