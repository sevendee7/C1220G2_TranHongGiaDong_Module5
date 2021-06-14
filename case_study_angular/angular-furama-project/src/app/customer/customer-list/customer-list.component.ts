import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ModalDismissReasons, NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];
  page = 4;
  pageSize = 4;
  collectionSize = 0;
  closeResult: string = '';

  constructor(private customerService: CustomerService,
              private modalService: NgbModal,
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
  temp:number;
  deleteCustomer() {
    if (this.temp === 1) {
      this.customerService.deleteCustomer(this.temp).subscribe(() => {
        console.log(this.temp);
      }, e => {
        console.log(e);
      });
    }
  }
  sendId(id: number) {
    this.temp=id;
  }

  // open(content: any) {
  //   // this.modalService.open(content);
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   });
  // }



}
