declare namespace Navigation {
  export declare type AppTabsParamList = {
    Home: unknown | undefined;
    Weather: unknown | undefined;
    Calendar: unknown | undefined;
    Garden: unknown | undefined;
    Settings: unknown | undefined;
    Login: unknown | undefined;
    Register: unknown | undefined;
    Tasks: unknown | undefined;
  };

  export declare type AppTabsPageProps<T extends keyof AppTabsParamList> =
    import("@react-navigation/bottom-tabs").BottomTabScreenProps<AppTabsParamList, T>;
}
