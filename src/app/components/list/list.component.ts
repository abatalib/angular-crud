import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from "../shared/dialog/dialog.component";
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  color = "warn";
  products!:ProductModel[];

  displayedColumns: string[] = ['id', 'name', 'type', 'price', 'action'];
  dataSource!: MatTableDataSource<ProductModel>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(public dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '450px',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe(()=>
      this.getProducts()
    );
  }

  getProducts(){
      this.productService.getListProduct().subscribe({
        next: data=>{
          this.dataSource = new MatTableDataSource<ProductModel>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: err => {
          console.log(err);
        }
      })
  }

  editProduct(row: ProductModel) {
    this.dialog.open(DialogComponent, {
      width: '450px',
      height: 'auto',
      data: row
    }).afterClosed().subscribe(()=>
      this.getProducts()
    );
  }

  delProduct(row: ProductModel) {
    let conf = confirm("Êtes vous sûr de supprimer le produit ?")
    if (conf==false) return;

    this.productService.deleteProduct(row.id)
      .subscribe({
        next : data =>{
          this.getProducts();
        },
        error: err => {
          console.log(err);
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
