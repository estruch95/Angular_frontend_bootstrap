import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/service/communicator-service.service';

@Component({
  selector: 'app-user-options-list',
  templateUrl: './user-options-list.component.html',
  styleUrls: ['./user-options-list.component.css']
})
export class UserOptionsListComponent implements OnInit {

  userOptionsList: String[] = ['Mis cuentas', 'Vista empleado', 'Mi perfil', 'Cerrar sesión'];
  show: boolean = false;
  showAccountsList: boolean = false;

  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit(): void {
    this.communicatorService.onClickOptionTrigger.subscribe((showOptionsList: any) => {
      this.show = showOptionsList;
    });
  }

  onOptionClicked(optionSelected: String): void {
    if(optionSelected == "Mis cuentas"){
      if(this.showAccountsList == false) {
        this.showAccountsList = true;
      } else {
        this.showAccountsList = false;
      }
      
      this.communicatorService.onClickAccountsTrigger.emit(this.showAccountsList);
    }
  }

}
