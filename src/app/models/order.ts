export interface Order {
  orderId: number;
  customerId: number;
  installmentOptionId: number;
  paymentMethodId: number;
  productId: number;
  orderPrice: number;
  orderStatus: boolean;
}
