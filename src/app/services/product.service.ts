import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/product.model";
import {environment} from "../../environments/environment";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getListProduct(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(environment.HOST);
  }

  public opProduct(form: ProductModel, data?: any): Observable<ProductModel>{
    if (data!=null)
      return this.http.put<ProductModel>(environment.HOST+form.id,form)
    else
      return this.http.post<ProductModel>(environment.HOST,form)
  }

  public deleteProduct(id: number): Observable<ProductModel>{
    return this.http.delete<ProductModel>(environment.HOST+ id);
  }
}
