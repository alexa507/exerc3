import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedTransaction: any;
  transaction: Transaction[] = [];
  cols: any[] = [];

  constructor(private httpService: HttpServiceService, private router:Router) { }

  public ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'amount', header: 'Amount' },
      { field: 'balance', header: 'Balance' },
      { field: 'label', header: 'Label' },
      { field: 'date', header: 'Date' }
    ];

    this.httpService.getAllData().subscribe(data => {
      this.transaction = data;
    })
  }

  onRowSelect(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'id': this.selectedTransaction.id
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

}
