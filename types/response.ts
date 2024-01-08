import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { anime } from "./animeTypes";

export interface User {
  name: string;
  photo: string;
  password?: string;
  email: string;
  role: "user" | "admin";
  passwordChangedAt: string | any;
  passwordResetToken: string;
  resetTokenExpiresAt: string | any;
  favourites: anime[];
}

export interface UserState {
  user: User | null;
  token: string | null;
  isLogin: boolean;
  updateUser: boolean;
}

export interface loginResponse {
  data?: {
    status: string;
    token: string;
    user: User;
  };
  error?: SerializedError | FetchBaseQueryError | any;
}

export interface HandleFavouriteResponse {
  data?: {
    status: string;
    message: string;
    user: User;
  };
  error?: SerializedError | FetchBaseQueryError | any;
}
