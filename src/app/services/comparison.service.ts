import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comparison, ComparisonItem } from '../common/models/comparison.model';
import { Product } from '../common/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  // public compareList$ = this.compareList.asObservable();
  // private compareList = new BehaviorSubject<any[]>([]);

  private compareList: Comparison = this.getCompareFromLocalStorage();
  public comparisoneSubject$: BehaviorSubject<Comparison> = new BehaviorSubject(this.compareList);

  constructor() { }

  // setComparisoneList(item: any) {
  //   this.compareList.next(item);
  // }

  // getComparisoneList(): Observable<any[]> {
  //   return this.compareList;
  // }

  public addToCompareList(item: Product) {
    let comparisonItem: ComparisonItem = {
      item: item,
      compare: false,
    }
    if (this.isInArray(comparisonItem.item.code, this.compareList.products)) {
      return
    }
    this.compareList.products.push(comparisonItem);
    this.setCompareToLocalStorage(this.compareList);
    return
  }

  public removeItemFromCompareList(item: Product) {
    this.compareList.products = this.compareList.products.filter(p => {
      return item !== p.item;
    })
    this.setCompareToLocalStorage(this.compareList);
  }

  public updateCompare(product: ComparisonItem) {
    this.compareList.products = this.compareList.products.map(p => {
      if (p.item.code == product.item.code) {
        return p = product;
      }
      return p;
    })
    this.isCompare(this.compareList.products);
  }

  public disableCheckBox(): boolean {
    if (this.compareList.compareArr.length == 2) {
      return true;
    }
    return false;
  }

  private isCompare(products: ComparisonItem[]) {
    let arr: any[] = [];
    products.map(p => {
      if (p.compare == true) {
        return arr.push(p.item);
      }
      return
    })
    this.compareList.compareArr = arr;
    this.setCompareToLocalStorage(this.compareList);
  }

  private isInArray(code: string, arr: ComparisonItem[]) {
    if (arr.some(e => e.item.code === code)) {
      return true;
    }
    return false;
  }

  private setCompareToLocalStorage(item: Comparison) {
    localStorage.setItem('Comparisone', JSON.stringify(item));
  }

  private getCompareFromLocalStorage(): Comparison {
    let cartJson = localStorage.getItem('Comparisone');
    return cartJson ? JSON.parse(cartJson) : new Comparison();
  }
}
