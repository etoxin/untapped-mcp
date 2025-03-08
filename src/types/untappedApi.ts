// Common types

// Contact information for brewery
interface UntappdContact {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  url?: string;
}

// Location information for brewery
interface UntappdLocation {
  brewery_city?: string;
  brewery_state?: string;
  venue_address?: string;
  venue_city?: string;
  venue_state?: string;
  lat?: number;
  lng?: number;
}

// Brewery details
interface UntappdBrewery {
  brewery_id: number;
  brewery_name: string;
  brewery_slug?: string;
  brewery_label: string;
  country_name: string;
  contact: UntappdContact;
  location: UntappdLocation;
  brewery_active?: number;
  beer_count?: number; // Only in breweries section
}

// Beer details
interface UntappdBeer {
  bid: number;
  beer_name: string;
  beer_label: string;
  beer_abv: number;
  beer_ibu: number;
  beer_description: string;
  created_at: string;
  beer_style: string;
  auth_rating: number;
  wish_list: boolean;
  in_production?: number;
  beer_slug?: string;
  beer_style_id?: number;
  beer_active?: number;
  is_in_production?: number;
  is_vintage?: number;
  is_variant?: number;
  is_homebrew?: number;
  rating_count?: number;
  rating_score?: number;
}

// Beer stats
interface UntappdBeerStats {
  total_count: number;
  monthly_count: number;
  total_user_count: number;
  user_count: number;
}

// User information
interface UntappdUser {
  uid: number;
  user_name: string;
  first_name: string;
  last_name: string;
  user_avatar: string;
  relationship: string;
  is_private: number;
}

// Venue category
interface UntappdVenueCategory {
  category_name: string;
  category_id: string;
  is_primary: boolean;
}

// Venue categories section
interface UntappdVenueCategories {
  count: number;
  items: UntappdVenueCategory[];
}

// Foursquare venue info
interface UntappdFoursquareVenue {
  foursquare_id: string;
  foursquare_url: string;
}

// Venue icon
interface UntappdVenueIcon {
  sm: string;
  md: string;
  lg: string;
}

// Venue information
interface UntappdVenue {
  venue_id: number;
  venue_name: string;
  primary_category: string;
  parent_category_id: string;
  categories: UntappdVenueCategories;
  location: UntappdLocation;
  contact: UntappdContact;
  private_venue: boolean;
  foursquare: UntappdFoursquareVenue;
  venue_icon: UntappdVenueIcon;
}

// Photo information
interface UntappdPhoto {
  photo_img_sm: string;
  photo_img_md: string;
  photo_img_lg: string;
  photo_img_og: string;
}

// Media item for beer
interface UntappdMediaItem {
  photo_id: number;
  photo: UntappdPhoto;
  created_at: string;
  checkin_id: number;
  beer: UntappdBeer;
  brewery: UntappdBrewery;
  user: UntappdUser;
  venue: UntappdVenue[];
}

// Media section
interface UntappdMedia {
  count: number;
  items: UntappdMediaItem | UntappdMediaItem[]; // API inconsistently returns object or array
}

// Similar beer item
interface UntappdSimilarBeerItem {
  rating_score: number;
  beer: UntappdBeer;
  brewery: UntappdBrewery;
  friends: {
    items: any[]; // Can be more specific if needed
    count: number;
  };
}

// Similar beers section
interface UntappdSimilarBeers {
  count: number;
  items: UntappdSimilarBeerItem | UntappdSimilarBeerItem[]; // API inconsistently returns object or array
}

// Friends section
interface UntappdFriends {
  count: number;
  items: any[]; // Can be more specific if needed
}

// Vintage item
interface UntappdVintageItem {
  beer: {
    bid: number;
    beer_label: string;
    beer_slug: string;
    beer_name: string;
    is_vintage: number;
    is_variant: number;
  };
}

// Vintages section
interface UntappdVintages {
  count: number;
  items: UntappdVintageItem[];
}

// Complete beer info
interface UntappdBeerInfo extends UntappdBeer {
  stats: UntappdBeerStats;
  brewery: UntappdBrewery;
  media: UntappdMedia;
  similar: UntappdSimilarBeers;
  friends: UntappdFriends;
  vintages: UntappdVintages;
}

// Beer item in search results
export interface UntappdBeerItem {
  checkin_count: number;
  have_had: boolean;
  your_count: number;
  beer: UntappdBeer;
  brewery: UntappdBrewery;
}

// Brewery item in search results
interface UntappdBreweryItem {
  brewery: UntappdBrewery;
}

// Beer section in response
interface UntappdBeerSection {
  count: number;
  items: UntappdBeerItem[];
}

// Brewery section in response
interface UntappdBrewerySection {
  count: number;
  items: UntappdBreweryItem[];
}

// Response wrapper with metadata (common to all Untappd API responses)
export interface UntappdApiResponse<T> {
  meta: {
    code: number;
    response_time: {
      time: number;
      measure: string;
    };
    error_detail?: string;
    error_type?: string;
    developer_friendly?: string;
  };
  notifications: Record<string, unknown>;
  response: T;
}

// Untappd API Error Response
export interface UntappdApiErrorResponse {
  meta: {
    code: number;
    error_detail: string;
    error_type: string;
    developer_friendly?: string;
    response_time: {
      time: number;
      measure: string;
    };
  };
}

// Complete beer info response
export interface UntappdBeerInfoResponse {
  beer: UntappdBeerInfo;
}

// Complete search response
export interface UntappdBeerSearchResponse {
  found: number;
  offset: number;
  limit: number;
  term: string;
  parsed_term: string;
  beers: UntappdBeerSection;
  homebrew: UntappdBeerSection;
  breweries: UntappdBrewerySection;
}

// Complete typed response for beer search
export type UntappdBeerSearchResult =
  UntappdApiResponse<UntappdBeerSearchResponse>;

// Complete typed response for beer info
export type UntappdBeerInfoResult = UntappdApiResponse<UntappdBeerInfoResponse>;
