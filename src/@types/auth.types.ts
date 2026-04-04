export type UserDataType = {
  id: string;
  name: string;
  email: string;
};

export type UserResponseType = {
  data: UserDataType
};

export interface AuthState {
  user: UserDataType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  loginLoading: boolean;
  signupLoading: boolean;
}

export type SignupInputType = {
  fullname: string;
  username: string;
  email?: string;
  phoneNumber?: string;
  password: string;
  dateOfBirth: Date;
  profilePicture?: string | null;
  gender: number;
};
