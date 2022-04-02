declare namespace Navigation {
  export declare type AppTabsParamList = {
    Home: undefined;
    Tasks: undefined;
    Calendar: undefined;
    Garden: undefined;
    Settings: undefined;
    Login: undefined;
    Register: undefined;
  };

  export declare type AppTabsPageProps<T extends keyof AppTabsParamList> =
    import("@react-navigation/bottom-tabs").BottomTabScreenProps<AppTabsParamList, T>;
}
