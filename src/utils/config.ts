const appConfig: AppConfig = {
  AppName: 'PROJECT NAME',
  AppDomain: 'https://projectdomain.com',
  AppThemeColor: '#9479ff',
  Language: {
    Code: 'en',
    CodeRegion: 'en_GB',
    Name: 'English (UK)',
  },
  GoogleAnalyticsTrackID: '',
  GoogleTagManagerTrackID: '',
};

export default appConfig;

export interface AppConfig {
  AppName: string;
  AppDomain: string;
  AppThemeColor: string;
  Language: {
    Code: string;
    CodeRegion: string;
    Name: string;
  };
  GoogleAnalyticsTrackID?: string;
  GoogleTagManagerTrackID?: string;
}
