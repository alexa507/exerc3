import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  title = 'Transaction details';

  transactionId: any;
  transaction: any;

  constructor(private httpService:HttpServiceService, private route:ActivatedRoute){}

  public ngOnInit() {
    this.transactionId = this.route.snapshot.queryParamMap.get('id');

    this.httpService.getTransaction(this.transactionId).subscribe(data => {
      this.transaction = data;
    })
  }


}
