export class Product {

    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenUrl: string;

    constructor (id:number, nombre:string, descripcion:string, precio:number, imagenUrl:string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagenUrl = imagenUrl
    };

}
