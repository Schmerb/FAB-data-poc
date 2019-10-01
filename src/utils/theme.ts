import { css } from 'styled-components';

export const colors: Record<string, string> = {
  Primary: '',
  PrimaryHover: '',

  Secondary: '',
  SecondaryHover: '',

  LightBg: '',
  LightBgText: '',

  DarkBg: '',
  DarkBgText: '',
};

const showhideStyles = (isOpen: any, dur = 0.3) => css`
  max-height: 0px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: max-height ${dur}s, opacity ${dur}s,
    visibility ${dur}s ease ${dur}s;
  ${isOpen &&
    css`
      max-height: 999px;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transition: max-height ${dur}s, opacity ${dur}s,
        visibility ${dur}s ease 0s;
    `}
`;

// Level1 boxShadow
const boxShadowLevel1 = [
  // y-axis DOWN - Header
  css`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  `,
  // y-axis UP - Footer
  css`
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.24);
  `,
];
const boxShadowLevel2 = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const boxShadowLevel3 = css`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const boxShadowLevel4 = css`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const boxShadowLevel5 = css`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const fonts: Record<string, string> = {
  Title: '',
  Text: '',
};

export const breakpoints: Record<string, string> = {
  MobileS: '320px',
  MobileM: '375px',
  MobileL: '425px',
  Tablet: '768px',
  DesktopS: '1024px',
  DesktopM: '1440px',
  DesktopL: '2560px',
};

// const min = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes[label] / 16}em) {
//       ${css(...args)}
//     }
//   `;

//   return acc;
// }, {});
// // Max-width
// const max = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${(sizes[label] - 1) / 16}em) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

export const styles = {
  grow: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `,
  middle: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ellipsisMask: css`
    display: inline-block;
    font-size: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
  showhideStyles,
  boxShadows: [
    boxShadowLevel1,
    boxShadowLevel2,
    boxShadowLevel3,
    boxShadowLevel4,
    boxShadowLevel5,
  ],
};

export default {
  colors,
  fonts,
  breakpoints,
  styles,
};
