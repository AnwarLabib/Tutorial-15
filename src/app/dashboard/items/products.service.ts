import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Product } from './product.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

    constructor(private http : Http) { }

    getAllProducts() : Promise<Product[]> {
        return this.http.get('http://localhost:3000/api/product/getAllProducts')
            .toPromise()
            .then((res: Response) => res.json().data as Product[])
            .catch((err) : Promise<any> => {
                console.error(err.message, err);
                return Promise.reject(err.message || err);
            });
    }

    getMyProducts(user) {}

    createProduct(product : Product, user) {}

    deleteProduct(product : Product, user) {}

    editProduct(product : Product, user) {}

}