import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerTypes: CustomerType[];
  customer: Customer;
  submitted: boolean = false;
  customerEditForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      // this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerEditForm = new FormGroup({
        customerId: new FormControl(customer.customerId, [Validators.required, Validators.pattern('^(KH-)\\d{4}$')]),
        customerType: new FormControl(customer.customerType, Validators.required),
        name: new FormControl(customer.name, Validators.required),
        dateOfBirth: new FormControl(customer.dateOfBirth, Validators.required),
        idNumber: new FormControl(customer.idNumber, [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
        phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.pattern('^(090|091|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.pattern('^[a-z]+([\\_\\.]?[a-z\\d]+)*@[a-z]{3,7}\\.[a-z]{3}$')]),
        address: new FormControl(customer.address, Validators.required)
      });
    });
  }

  onReset() {
    this.submitted = false;
    this.customerEditForm.reset();
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  // updateCustomer(id: number) {
  //   this.submitted = true;
  //   if (this.customerEditForm.invalid) {
  //     return;
  //   }
  //   const customer = this.customerEditForm.value;
  //   this.customerService.updateCustomer(id, customer).subscribe(() => {
  //     this.router.navigateByUrl('/customers/list')
  //   }, e => {
  //     console.log(e);
  //   })
  // }
}
