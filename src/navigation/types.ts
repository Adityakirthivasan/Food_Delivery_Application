export type BottomTabParamList = {
  Home: undefined;
  FlashFood: undefined;
  Reorder: undefined;
};

export type RootStackParamList = {
  BottomTabs: undefined;

  OfferScreen: undefined;
  BestSellerScreen: undefined;
  MyOrdersScreen: undefined;

  RestaurantScreen: {
    item: any;
  };

  ProductDetailScreen: {
    item: any;
  };
};