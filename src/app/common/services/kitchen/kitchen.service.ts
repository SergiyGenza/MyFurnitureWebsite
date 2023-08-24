import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Sofa } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  productRef: AngularFireList<any>;
  products$: Observable<Sofa[]>;

  constructor(private dataBase: AngularFireDatabase) {
    this.productRef = this.dataBase.list('products/kitchen');
    this.products$ = this.productRef.valueChanges();
  }

  addProduct(Product: Sofa) {
    const key = this.productRef.push(Product).key;
    if (key) {
      Product.key = key;
    }
    return this.productRef.update(`/${key}`, Product)
  }

  getProduct(key: string | undefined): Observable<Sofa | undefined> {
    return this.products$.pipe(
      map((products) => {
        return products.find((b) => b.key === key);
      })
    );
  }

  getAllProducts(): Observable<Sofa[]> {
    return this.products$
  }

  updateProduct(key: any, data: any) {
    this.productRef.update(key, data)
  }

  removeProduct(id: any) {
    this.productRef.remove(id)
  }
}
