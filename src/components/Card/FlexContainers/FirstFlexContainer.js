// @flow
import React from 'react';
import { qualities, yields, beanSize } from '../helpers';
import { ReviewsStatic, SizeBar, FlexContainer } from '../../UI';
import RattingSection from '../RattingSection';
import { BeanSize, Quality, Yield } from '../../../types';

type FirstType = {
  bean_size: BeanSize,
  quality_potential: Quality,
  yield: Yield
};

const FirstFlexContainer = ({ bean_size, quality_potential, ...props }: FirstType) => (
  <FlexContainer>
    <RattingSection
      title="BEAN SIZE" //Note: use object keys in the future
      value={bean_size}
      Component={() =>
        SizeBar({
          iconName: 'football-ball',
          colorName: 'brown',
          rate: beanSize[bean_size]
      })}
    />
    <RattingSection
      title="QUALITY POTENTIAL"
      value={quality_potential}
      Component={() =>
        ReviewsStatic({
          rate: qualities[quality_potential],
          colorName: 'brown',
          iconName: 'coffee'
        })
      }
    />
    <RattingSection
      title="YIELD POTENTIAL"
      value={props.yield}
      Component={() =>
        ReviewsStatic({
          rate: yields[props.yield],
          colorName: 'brownLight',
          iconName: 'shield-alt'
        })
      }
    />
  </FlexContainer>
);

export default FirstFlexContainer;
