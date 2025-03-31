import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productos-back',
  templateUrl: './productos-back.component.html',
  styleUrls: ['./productos-back.component.scss']
})
export class ProductosBackComponent implements OnInit {
  productos: any[] = []; 
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.productos = data.map(producto => ({
          title: producto.title,
          description: producto.description,
          price: producto.price,
          discount: producto.discountPercentage,
          rating: producto.rating,
          stock: producto.stock,
          brand: producto.brand,
          category: producto.category,
          thumbnail: producto.thumbnail
        }));
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });
  }
}