export type CategoryType = 
  | 'all' 
  | 'sev-bhujia' 
  | 'sev-gathiya'
  | 'soya-sticks'
  | 'gujarati-mix'
  | 'traditional-farsan'
  | 'farali-diet'  
  | 'mixtures-chivda' 
  | 'crisps-mathri' 
  | 'healthy-roasted' 
  | 'festive-sweets';

export interface NutritionInfo {
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
  shelfLife: string;
}

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  category: CategoryType;
  categoryLabel: string;
  description: string;
  shortDesc: string;
  spiceLevel: 1 | 2 | 3 | 4 | 5; // 1: Mild, 3: Medium, 5: Fire Teekha
  prices: {
    '200g': number;
    '400g': number;
    '1kg': number;
  };
  weightOptions: ('200g' | '400g' | '1kg')[];
  defaultWeight: '200g' | '400g' | '1kg';
  isBestseller?: boolean;
  isNew?: boolean;
  isFestiveSpecial?: boolean;
  isDietFriendly?: boolean;
  isJainFriendly?: boolean;
  tags: string[];
  ingredients: string[];
  nutrition: NutritionInfo;
  bestPairing: string;
  image: string;
  badge?: string;
  bgGradient: string;
}

export interface BoxItem {
  product: Product;
  weight: '200g' | '400g' | '1kg';
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  familyRole: string;
  avatar: string;
  comment: string;
  favoriteSnack: string;
  rating: number;
}

export interface QuizPreferences {
  occasion: string;
  spicePreference: string;
  familyProfile: string;
}
