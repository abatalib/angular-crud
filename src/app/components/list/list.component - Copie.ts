import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from "../shared/dialog/dialog.component";
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListComponent implements OnInit {
  color = "warn";
  products!:ProductModel[];
  displayedColumns: string[] = ['ref', 'name', 'type', 'price'];



  columnsToDisplay = ['ref', 'name', 'type', 'price', 'action'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: ProductModel | null;



  constructor(public dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  getProducts(){
      this.productService.getListProduct().subscribe({
        next: data=>{
          this.products = data;
        },
        error: err => {
          console.log(err);
        }
      })
  }

}
