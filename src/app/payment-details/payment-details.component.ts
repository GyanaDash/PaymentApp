import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [

  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void
  {
    this.service.refreshList();
  }

  populateForm(selectedRecord:any)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(paymentDetailId:any)
   {
    if (confirm('Are you sure to delete this record ?'))
    {
      this.service.deletePaymentDetail(paymentDetailId)
        .subscribe(res =>
          {
              this.service.refreshList();
              console.log(res);
          },
           err =>
          {
              console.log(err);
          })
    }
  }
}
