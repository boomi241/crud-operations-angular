import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createMarketingCalls(form: any) {
    return this.http.post(
      `http://192.168.1.16:6010/callmarketingform/add/customerdetails`,
      form
    );
  }

  fetchCustomerByDate(data: any) {
    console.log(data);
    return this.http.post(
      'http://192.168.1.16:6010/callmarketingform/get/getcustomerdetailsbydate',
      data
    );
  }
  deleteMarketingList(id: number) {
    return this.http.delete(
      `http://192.168.1.16:6010/callmarketingform/delete/customerdetails/${id}`
    );
  }
  getMarketingcalls(id: number) {
    return this.http.get(
      `http://192.168.1.16:6010/callmarketingform/get/customerdetails/${id}`
    );
  }
  updateMarketingCalls(id: number, form: any) {
    return this.http.put(
      `http://192.168.1.16:6010/callmarketingform/update/customerdetails/${id}`,
      form
    );
  }
  fetchProductList() {
    return this.http.get(
      `http://192.168.1.16:6010/callmarketingform/get/productlist`
    );
  }
  addProduct(form: any) {
    return this.http.post(
      `http://192.168.1.16:6010/callmarketingform/add/product`,
      form
    );
  }
  fetchProductById(id: number) {
    return this.http.get(
      `http://192.168.1.16:6010/callmarketingform/get/product/${id}`
    );
  }

  updateProduct(id: number, form: any) {
    return this.http.put(
      `http://192.168.1.16:6010/callmarketingform/update/product/${id}`,
      form
    );
  }
  deleteProduct(id: number) {
    return this.http.delete(
      `http://192.168.1.16:6010/callmarketingform/delete/product/${id}`
    );
  }
}
