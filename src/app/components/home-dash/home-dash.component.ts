import { Component, OnInit } from '@angular/core';
import { PrinterActionsService } from 'src/app/services/printer-actions.service';
import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx'; //plugin

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css'],
})
export class HomeDashComponent implements OnInit {
searchResp:any;
connectResp:any;
printResp:any;
content = "Hello,We are testing printing via bluetooth printer.";

printerOptions:PrintOptions = {
  name: 'Test Content',
  duplex: true,
  orientation: 'landscape',
  monochrome: true
}

  constructor(private printer: Printer) { }

  ngOnInit() {}

  //search for printer devices
  searchDevices(){
  //  alert("Searching for devices please wait....");
  //  this.printer.printer.isAvailable().then(response => {
  //    if(response == true) //if devices were found
  //    {
  //      //display the available printers
  //       this.printer.printer.pick().then(response => {
  //         if(response != null){
  //           this.printer.printer.print(this.content,this.printerOptions).then(response => this.printResp = response,
  //             (error) =>{
  //               this.printResp = error;
  //             }); 
  //         }
  //       });
  //     }
  //    else{
  //     //if no devices were found
  //     this.searchResp = "No Bluetooth Printer found!"
  //    }

  //     },
  //     (error) => this.searchResp = error);
   //nb.isAvailable() returns a boolean indicating whether bluetooth printers were found or not
   this.printer.isAvailable().then(function(){
    this.printer.print("https://www.techiediaries.com").then(function(){
    alert("printing done successfully !");
    },function(){
    alert("Error while printing !");
    });
}, function(){
alert('Error : printing is unavailable on your device ');
});
  }

   //print some content
  //  printContent(body:any){
  //    this.printer.printer.print(body,this.printerOptions).then(response => this.printResp = response,
  //     (error) =>{
  //       this.printResp = error;
  //     } );
  //  }
   
}

