import type React from 'react';

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type AlignItems = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type AlignContent =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";
export type AlignSelf = "auto" | AlignItems;

export type FlexProps = {
  as?: React.ElementType;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  flexWrap?: React.CSSProperties["flexWrap"];
  flexDirection?: React.CSSProperties["flexDirection"];
  rowGap?: React.CSSProperties["rowGap"];
  columnGap?: React.CSSProperties["columnGap"];
  order?: React.CSSProperties["order"];
  flexGrow?: React.CSSProperties["flexGrow"];
  flexShrink?: React.CSSProperties["flexShrink"];
  flexBasis?: React.CSSProperties["flexBasis"];
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLElement>, "style" | "className" | "children">;