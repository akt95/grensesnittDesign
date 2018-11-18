import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";
import {QrScanPage} from "./qr-scan/qr-scan";


@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {

  options: BarcodeScannerOptions;
  encodeText: string = "";
  encodeData: any = {};
  scannedData: any = {};

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }

 toScan()
 {
   this.navCtrl.push(QrScanPage);
 }
}



