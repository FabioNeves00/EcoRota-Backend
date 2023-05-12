
export type BaseEntityType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PackageType = {
  title: string;
  dueDate: Date;
  orders: OrderType[];
  price: number;
  durationInHours: number;
  image: string[];
  description: string;
  discount: number;
  hasCoticoPartnership: boolean;
  hasRestaurantsIncluded: boolean;
  hasTransportIncluded: boolean;
} & BaseEntityType

export type OrderType = {
  package: Package
  name: string
  email: string;
  price: number;
  quantity: number
  paymentMethod: PaymentMethodsType;
  hasDiscount: boolean;
} & Omit<BaseEntityType, 'updatedAt'>

export type QrcodeInfoType = {
  
}

export type PaymentMethodsType = "Credit card" | "Debit card" | "Pix" | "Bank Payment Slip"