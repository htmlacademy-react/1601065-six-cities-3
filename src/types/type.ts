import { ReactNode } from "react";
import { AuthorizationStatus } from "../const/const.ts";

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Location = {
  latitude: number;
  longitude: number;
};

export type Offer = {
  id: string;
  city: string;
  images: string[];
  title: string;
  description: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  goods: string[];
  host: Host;
  location: Location;
};

export type OfferListProps = {
  description: ReactNode;
  images: string[];
  title: ReactNode;
  id: string;
  offers: Offer[];
};

export type FavoriteScreenProps = {
  offers: Offer[];
};

export type Review = {
  id: string;
  offerId: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  rating: number;
  date: string;
  comment: string;
};

export type OfferScreenProps = {
  offers: Offer[];
  reviews: Review[];
  apartCount: number;
  email: string;
};

export type OfferCardProps = {
  offer: Offer;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export type CommentFormProps = {
  onSubmit: (comment: { rating: number; review: string }) => void;
};

export type HeaderDescription = {
  number: number;
  city: string;
};

export type HeaderProps = {
  apartCount: number;
  email: string;
};

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

export type MainScreenProps = {
  apartCount: number;
  email: string;
  offers: Offer[];
};

// import { ReactNode } from "react";
// import { AuthorizationStatus } from "../const/const.ts";

// export type OfferListProps = {
//   description: ReactNode;
//   images: any;
//   title: ReactNode;
//   id: string;
//   offers: {
//     id: string;
//     city: string;
//     images: string[];
//     title: string;
//     description: string;
//     type: string;
//     bedrooms: number;
//     maxAdults: number;
//     price: number;
//     rating: number;
//     isPremium: boolean;
//     isFavorite: boolean;
//     goods: string[];
//     host: {
//       name: string;
//       avatarUrl: string;
//       isPro: boolean;
//     };
//     location: {
//       latitude: number;
//       longitude: number;
//     };
//   }[];
// };

// export type Offer = OfferListProps['offers'][0];

// export type FavoriteScreenProps = {
//   offers: OfferListProps['offers'];
// };

// export type Review = {
//   id: string;
//   offerId: string;
//   user: {
//     name: string;
//     avatarUrl: string;
//   };
//   rating: number;
//   date: string;
//   comment: string;
// };

// export type OfferScreenProps = {
//   offers: OfferListProps[];
//   reviews: Review[];
//   apartCount: number;
//   email: string;
// };

// export type OfferCardProps = {
//   offer: {
//     id: string;
//     images: string[];
//     title: string;
//     type: string;
//     price: number;
//     rating: number;
//     isPremium: boolean;
//     isFavorite: boolean;
//   };
//   isActive: boolean;
//   onMouseEnter: () => void;
//   onMouseLeave: () => void;
// };

// export type CommentFormProps = {
//   onSubmit: (comment: { rating: number; review: string }) => void;
// };

// export type HeaderDescription = {
//   number: number;
//   city: string;
// };

// export type HeaderProps = {
//   apartCount: number;
//   email: string;
// };

// export type PrivateRouteProps = {
//   authorizationStatus: AuthorizationStatus;
//   children: JSX.Element;
// };

// export type MainScreenProps = {
//   apartCount: number;
//   email: string;
//   offers: {
//     id: string;
//     city: string;
//     images: string[];
//     title: string;
//     description: string;
//     type: string;
//     bedrooms: number;
//     maxAdults: number;
//     price: number;
//     rating: number;
//     isPremium: boolean;
//     isFavorite: boolean;
//     goods: string[];
//     host: {
//       name: string;
//       avatarUrl: string;
//       isPro: boolean;
//     };
//     location: {
//       latitude: number;
//       longitude: number;
//     };
//   }[];
// };
