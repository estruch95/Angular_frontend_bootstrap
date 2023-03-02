import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/service/communicator-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  startTimeSession: String = "04:01:56";
  endTimeSession: String = "07:00:53";
  userName: String = "Iván Estruch";
  inSession: boolean = false;
  showOptionsList: boolean = false;

  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
  }

  openSession(): void {
    this.inSession = true;
  }

  closeSession(): void {
    this.inSession = false;
  }

  openUserOptionsList(): void {

    if(this.showOptionsList == false) {
      this.showOptionsList = true;
    } else {
      this.showOptionsList = false;
      this.communicatorService.onCloseAllListsTrigger.emit(false);
    }

    this.communicatorService.onClickOptionTrigger.emit(this.showOptionsList);
  }

}
