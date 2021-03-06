import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Vendor } from '../model/vendor';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {

  vendorForm: FormGroup;
  vendor: Vendor;
  
  name = '';
  mobile = '';
  email = '';
  address = '';
  gstNo = '';

  isShowingResults = true;
  

  constructor(private router: Router, private vendorService: VendorService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vendorForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'mobile': [null, Validators.required],
      'address': [null, Validators.required],
      'gstNo': [null, Validators.required],
    });
  }

  addVendor(form: NgForm){
    this.vendorService.addVendor(form).subscribe(res => {this.vendor = res});
    this.isShowingResults = false;
    this.router.navigate(['/vendor-details', this.vendor.id])
  }

}
