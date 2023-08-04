import { MensajeService } from './../../services/mensaje.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;

  constructor(
    private mensajeService: MensajeService
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.mensajeService.sendMensaje(this.product);
  }

}
