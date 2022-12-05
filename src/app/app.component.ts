import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpServiceService } from './http-service.service';
import { Transaction } from './Transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank transaction report';

  selectedTransaction: any;
  transaction: Transaction[] = [];
  cols: any[] = [];
  currentDate = Date.now();

  constructor(private httpService: HttpServiceService, private router:Router) { }

  public ngOnInit() {
    setInterval(() => {
      this.currentDate = Date.now();
    }, 1000);
  }
}
