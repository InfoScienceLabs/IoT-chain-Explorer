import { Component, OnInit } from '@angular/core';
import { CertificateComponent } from '../certificate/certificate.component';

@Component({
  selector: 'certificate-detail',
  templateUrl: './certificate-detail.component.html',
  styleUrls: ['./certificate-detail.component.scss']
})

export class CertificateDetailComponent  {

  // constructor() { }

  // ngOnInit() {
  // }
  component = CertificateComponent;

}
