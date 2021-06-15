import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];
  page = 1;
  pageSize = 3;
  collectionSize = 0;
  customerDelete: Customer;
  idDelete: number;
  nameCustomerDelete: string;

  constructor(private customerService: CustomerService,
              config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customerList => {
      this.customerList = customerList;
      this.collectionSize = customerList.length;
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
      console.log(this.idDelete);
    }, e => {
      console.log(e);
    }, () => {
      this.getAll();
    });
  }

  sendIdToComponent(id: number) {
    this.idDelete = id;
    this.customerService.findById(id).subscribe(data => {
      this.customerDelete = data;
      this.nameCustomerDelete = this.customerDelete.name;
    });
  }
}
