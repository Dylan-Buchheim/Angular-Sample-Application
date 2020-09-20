import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  cartProducts:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    let data=localStorage.getItem('cart');
    if(data!==null){
      this.cartProducts = JSON.parse(data);
    }else{
      this.cartProducts = [];
    }

    this.products = [
      {
        id:1,
        title:"Americano",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:2
      },
      {
        id:2,
        title:"Cappuccino",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:1.50
      },
      {
        id:3,
        title:"Latte",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:2
      },
      {
        id:4,
        title:"Macchiato",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:5.50
      },
      {
        id:5,
        title:"Mocha",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:6
      },
      {
        id:6,
        title:"Cortado",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:4
      },
      {
        id:7,
        title:"Long Black",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:2
      },
      {
        id:8,
        title:"Iced Coffee",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:3.25
      },
      {
        id:9,
        title:"Black Coffe",
        description:"A delicious drink!",
        img:"assets/noun_942609.png",
        price:4.05
      },
    ];
  }
  //Functions
  addToCart(index){
    let product=this.products[index];
    let cartData=[];
    let data = localStorage.getItem('cart');
    if(data!==null){
      cartData=JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart',JSON.stringify(cartData));
    data = localStorage.getItem('cart');
    this.products[index].isAdded=true;
  }
  updateCartData(cartData){
    this.cartProducts=cartData;
  }
  goToCart(){
    this.router.navigate(['/cart']);
  }
}
