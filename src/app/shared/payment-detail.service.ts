import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  readonly baseURL = "http://localhost:5000/api/PaymentDetail";
  list : PaymentDetail[];

  refreshList()
  {
      this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }

  postPaymentDetail()
  {
    return this.http.post(this.baseURL,this.formData);
  }

  putPaymentDetail()
  {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number)
  {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
