import { Injectable } from '@angular/core';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';

@Injectable({
  providedIn: 'root'
})
export class PrinterActionsService {

  constructor(public printer:Printer) { }
}
