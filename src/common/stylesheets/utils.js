export const breakpoints = {
  medium: 640,
  large: 1024,
};

export const media = Object.keys(breakpoints).reduce((acc, item) => {
  acc[item] = `@media screen and (max-width: ${breakpoints[item]}px)`;
  return acc;
}, {});

export const hoverSupport = `
  @media (hover:hover), (min-width:0\0),    (min--moz-device-pixel-ratio:0) 
`;


export const colors = {
  orange: '#f57d01',
  white: '#fff',
  codGray: '#1C1919',
}