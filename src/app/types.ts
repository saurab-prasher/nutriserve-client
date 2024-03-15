export interface Meal {
  _id: string;
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  nutritionalValues: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  imageUrl?: string; // '?' denotes that this field is optional
  createdAt?: string; // These fields come from enabling timestamps in your schema
  updatedAt?: string;
}

export interface Testimonial {
  _id: string;
  author: string;
  content: string;
  rating: number; // Assuming rating is always an integer between 1 and 5
  createdAt?: string;
  updatedAt?: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface MealPlan {
  _id: string;
  userId: string; // Reference to a User object
  week: number;
  year: number;
  meals: Array<{
    day: string;
    mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
    mealId: string; // Reference to a Meal object
  }>;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string; // Note: You might not always want to include this in frontend types
  preferences: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Pricing {
  _id: string;
  numberOfPeople: number;
  recipesPerWeek: number;
  pricePerServing: number;
  discount: number;
  baseShipping: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Wishlist {
  _id: string;
  userId: string; // Reference to a User object
  mealIds: string[]; // Array of references to Meal objects
  createdAt?: string;
  updatedAt?: string;
}
