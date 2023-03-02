import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/service/communicator-service.service';

@Component({
  selector: 'app-user-accounts-list',
  templateUrl: './user-accounts-list.component.html',
  styleUrls: ['./user-accounts-list.component.css']
})
export class UserAccountsListComponent implements OnInit {

  userAccountsList: { 
    company: String, 
    username: String, 
    userSessionTime: String, 
    circleText: String }[] = [
    {"company": "Sesame 1", "username": "Iván Estruch", "userSessionTime": "Hoy llevas 00:00", "circleText":"S1"},
    {"company": "Sesame 2", "username": "Iván Estruch", "userSessionTime": "Hoy llevas 00:00", "circleText":"S2" }
  ];
  show: boolean = false;
  
  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    this.communicatorService.onClickAccountsTrigger.subscribe((showAccountList: any) => {
      this.show = showAccountList;
    });
    this.communicatorService.onCloseAllListsTrigger.subscribe((showLists: any) => {
      this.show = showLists;
    });
  }

}
