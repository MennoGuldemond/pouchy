export interface User extends GoogleUser {
  recipeIds: string[];
  createdOn: any;
}

export interface GoogleUser {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}
