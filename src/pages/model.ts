export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignup {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}
