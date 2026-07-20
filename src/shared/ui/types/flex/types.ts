export const flexbox = 'display,flex-direction,flex-wrap,flex-flow,justify-content,align-items,align-content,order,flex-grow,flex-shrink,flex-basis,flex,align-self,gap,row-gap,column-gap';

export function props(): string[] {
  return flexbox.split(',');
}