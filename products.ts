import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {

  getProducts() {
    return [
      {
        product_id: 101,
        product_name: 'Laptop',
        description: 'Gaming Laptop',
        price: 55000,
      },
      {
        product_id: 102,
        product_name: 'Mouse',
        description: 'Wireless Mouse',
        price: 1200,
      },
      {
        product_id: 103,
        product_name: 'Keyboard',
        description: 'Mechanical Keyboard',
        price: 3500,
      },
      {
        product_id: 104,
        product_name: 'Monitor',
        description: '24-inch LED Monitor',
        price: 8500,
      },
    ];
  }
}
