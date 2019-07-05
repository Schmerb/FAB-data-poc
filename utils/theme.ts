const theme: Theme = {
  colors: {
    Primary: '',
    Secondary: '',

    Light: '',
    LightText: '',

    Dark: '',
    DarkText: '',
  },
};

export interface Theme {
  colors: Record<string, string>;
}

export default theme;
