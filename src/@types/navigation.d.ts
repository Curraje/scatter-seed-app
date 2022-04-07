declare namespace Navigation {
  export declare type AppTabsParamList = {
    Home: unknown;
    Weather: unknown;
    Calendar: unknown;
    Garden: unknown;
    Settings: unknown;
    Login: unknown;
    Register: unknown;
  };

  export declare type AppTabsPageProps<T extends keyof AppTabsParamList> =
    import("@react-navigation/bottom-tabs").BottomTabScreenProps<AppTabsParamList, T>;
}
