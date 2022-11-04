export default interface IProduct {
  name: string;
  brand: string;
  price: number;
  manufacturingDate?: Date;
  expirationDate?: Date;
}
