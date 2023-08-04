import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MensajeService } from 'src/app/services/mensaje.service';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from 'src/app/service/api.service';
import { link } from 'src/app/models/link';
import { response } from 'src/app/models/responsePayPal';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  li: link = new link("","","");
  data: response = new response("","", [this.li]);
  str: string = "";
  cartItems: any = [];
  total = 0;

  constructor(
    private mensajeService: MensajeService,
    private storageService :StorageService,
    private apiService: ApiService
  ){ }

  ngOnInit(): void {
    if(this.storageService.existsCart()){
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
    
  }

  getItem(): void{
    this.mensajeService.getMensaje().subscribe((product:Product)=>{
      let exists = false; 
      this.cartItems.forEach((item: { productId: number; qty: number; }) => {
        if (item.productId === product.id){
          exists = true;
          item.qty ++;
        }
      
      });

      if(!exists){
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });  
  }

  getTotal(): number{
    let total = 0;
    this.cartItems.forEach((item: { qty: number; productPrecio: number; }) =>{
      total += item.qty * item.productPrecio;
    });
    return + total.toFixed(2);
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deleteItem(i:number): void{
    if(this.cartItems[i].qty>1){
      this.cartItems[i].qty --;
    }else{
      this.cartItems.splice(i, 1);
    }
    this.total = this.getTotal(); 
    this.storageService.setCart(this.cartItems);
  }

  async callApi() {
    this.apiService.getData(this.total.toString()).subscribe(data => {
      this.data = data;
      this.str =data.links[1].href;
    })
    await delay(5000);
    return window.location.href=this.str;
  }


}
