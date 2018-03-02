export class Product {

  updatedAt: Date;

  //inMyCart: boolean;
  
  constructor(public name: string, public price: Number, public sellerName: string,
    public id? : string, public createdAt? : Date) {}

}