import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  @Output() onClickOptionTrigger: EventEmitter<any> = new EventEmitter();
  @Output() onClickAccountsTrigger: EventEmitter<any> = new EventEmitter();
  @Output() onCloseAllListsTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
