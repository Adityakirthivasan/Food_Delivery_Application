export type BottomTabParamList = {
  Home: undefined;
  FlashFood: undefined;
  Reorder: undefined;
};

export type RootStackParamList = {
  SplashScreen: undefined;

  OnboardingScreen: undefined;

LoginScreen: undefined;

RegisterScreen: undefined;

BottomTabs: undefined;

  OfferScreen: undefined;

  BestSellerScreen: undefined;

  MyOrdersScreen: undefined;

  RestaurantScreen: {
    item?: any;
    restaurant?: any;
  };

  ProductDetailScreen: {
    item?: any;
  };

  SearchScreen: undefined;

  ReorderScreen: undefined;

  BookingScreen: {
    order?: any;
  };
};