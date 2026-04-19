export type UserDataType = {
  _id: string;
  email: string;
};

export type UserResponseType = {
  success: boolean;
  data: UserDataType;
  message: string;
};

export interface AuthState {
  user: UserDataType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  message: string;
  success: boolean;
}

export type SignupInputType = {
  fullname: string;
  username: string;
  email?: string;
  phoneNumber?: string;
  password: string;
  dateOfBirth: Date | string;
  gender: number;
};

export type SigninInputType = {
  identifier: string;
  password: string;
};
