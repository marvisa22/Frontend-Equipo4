import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
    new Product(1, "Cultivo del café", "El Curso Cultivo de Café está diseñado para brindar a los participantes los conocimientos fundamentales y las técnicas prácticas necesarias para cultivar café de calidad. El curso se enfoca en los aspectos teóricos y prácticos del cultivo de café.", 20, "../../../assets/images/cultivo.jpg"),
    new Product(2, "Curso de catación del café", "Acompañanos en esta experiencia fascinante que te permitirá explorar y apreciar las sutilezas y complejidades de esta bebida, aprenderas a evaluar y apreciar las características sensoriales del café como aroma, sabor y acidez", 20, "../../../assets/images/catacion.jpg"),
    new Product(3, "Curso de Preparación de Espresso", "En este curso aprenderás a preparar el espresso perfecto. Desde la molienda hasta la extracción, ¡conviértete en un barista experto y sorprende a tus amigos y familiares con tus habilidades!", 20, "../../../assets/images/cafe-expresso.avif"),
    new Product(4, "Curso Integral de Café", "Es un programa diseñado para brindar a los participantes un conocimiento profundo y práctico sobre  del café. Desde el cultivo y la cosecha hasta el tostado, la preparación y la degustación.", 20, "../../../assets/images/cafe-integral.jpg"),
    new Product(5, "Curso de Latte Art", "En este curso aprenderás a crear hermosas obras de arte en tus tazas de café. Desde corazones hasta cisnes, ¡sorprende a tus amigos y familiares con tus habilidades de Latte Art!", 20, "../../../assets/images/late-arte.avif"),
    new Product(6, "Curso de Cupping", "En este curso aprenderás a degustar y evaluar diferentes tipos de café. Desde el aroma hasta el sabor, ¡conviértete en un experto en Cupping y sorprende a tus amigos y familiares con tus habilidades!", 20, "../../../assets/images/cupping.jpg"),
  ];

  constructor() { }

  getProducts(): Product [] {
    return this.products;
  }
}
