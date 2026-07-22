import React from 'react';
import type { FlexProps } from './types.ts';

export const Flex = ({
  as: Tag = 'div',
  width = '100%',
  height = 'auto',
  justifyContent,
  alignItems,
  alignSelf,
  flexWrap,
  flexDirection,
  rowGap,
  columnGap,
  order = 0,
  flexGrow = 0,
  flexShrink = 1,
  flexBasis = 'auto',
  className,
  children,
  style,
  ...otherProps
}: FlexProps) => {
  const flexStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent,
    alignItems,
    alignSelf,
    flexWrap,
    flexDirection,
    rowGap,
    columnGap,
    width,
    height,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    ...style,
  };

  return (
    <Tag {...otherProps} className={className} style={flexStyle}>
      {children}
    </Tag>
  );
};