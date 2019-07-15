const theme: Theme = {
  colors: {
    Primary: '',
    PrimaryHover: '',

    Secondary: '',
    SecondaryHover: '',

    LightText: '',
    LightBackground: '',

    DarkText: '',
    DarkBackground: '',
  },
};

export interface Theme {
  colors: Record<string, string>;
}

export default theme;
