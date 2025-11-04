export interface Package {
  duration: string;
  price: string;
  speed: string;
  popular: boolean;
  icon: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface PaymentData {
  phoneNumber: string;
  amount: string;
  packageName: string;
}
