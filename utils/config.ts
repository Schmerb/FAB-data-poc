const appConfig: AppConfig = {
  AppName: 'Unnamed Greatness',
  AppDomain: 'https://clientwebsite.com',
  AppThemeColor: '#5BBFA7',
  Language: {
    Code: 'en',
    CodeRegion: 'en_GB',
    Name: 'English (UK)',
  },
};

export default appConfig;

export interface AppConfig {
  AppName: string;
  AppDomain: string;
  AppThemeColor: string;
  Language: Locale;
  GoogleAnalyticsTrackID?: string;
  GoogleTagManagerTrackID?: string;
}

export interface Locale {
  Code: string;
  CodeRegion: string;
  Name: string;
}
