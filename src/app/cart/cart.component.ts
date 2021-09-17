import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Product } from '../products';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items: Product[] | [] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    this.items = this.cartService.clearCart();

    console.warn('Your order has been submitted',    this.checkoutForm.value);

    this.checkoutForm.reset();
    this.router.navigateByUrl('/');
  }
}
