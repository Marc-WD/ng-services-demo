import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');

  // public  employees = [{
  //   id: 101,
  //   firstname: 'Joseph',
  //   lastname: 'Dizon',
  //   email: 'jdizon@hau.edu.ph',
  // },
  // {
  //   id: 102,
  //   firstname: 'James',
  //   lastname: 'Atienza',
  //   email: 'jatienza@hau.edu.ph',
  // },
  // {
  //   id: 103,
  //   firstname: 'John',
  //   lastname: 'Cena',
  //   email: 'jcena@hau.edu.ph',
  // },
  // {
  //   id: 104,
  //   firstname: 'Robert',
  //   lastname: 'Quintana',
  //   email: 'rquintana@hau.edu.ph',
  // }];

  // =====EMPLOYEES=====
  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  // =====PRODUCTS=====
  public products: {
    product_id: number,
    product_name: string,
    description: string,
    price: number,
  }[] = [];

  // =====CONSTRUCTOR/s=====
  constructor(
    private _employeeService: Employee,
    private _productsService: Products
  ) {}

  // =====ngOnInit/s=====
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }
}
