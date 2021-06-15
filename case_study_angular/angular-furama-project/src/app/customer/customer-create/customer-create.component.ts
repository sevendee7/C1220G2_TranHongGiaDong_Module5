import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    customerId: new FormControl('', [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
    customerType: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    idNumber: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z]+([\\_\\.]?[a-z\\d]+)*@[a-z]{3,7}\\.[a-z]{3}$')]),
    address: new FormControl('', Validators.required)
  });
  customerTypes: CustomerType[];
  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  submit() {
      const customer = this.customerForm.value;
      this.customerService.saveCustomer(customer).subscribe(() => {
        this.customerForm.reset();
      }, e => {
        console.log(e);
      });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }
}
