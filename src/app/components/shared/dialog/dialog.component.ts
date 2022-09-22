import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dialogForm!: FormGroup;
  activeBtn: boolean = false;
  title: string = "Ajouter un produit";

  constructor(
              @Inject(MAT_DIALOG_DATA) public dataToEdit: ProductModel,
              private dialogRef: MatDialogRef<DialogComponent>,
              private productService: ProductService,
              private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.initializeForm();

    this.dataToEdit ? (this.dataToForm(), this.title="Mise à jour de produit") : this.title="Ajouter un produit";
  }

  private initializeForm(): void {
    this.dialogForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.dialogForm.valid) {
      this.SpinnerService.show();
      this.activeBtn = false;
      this.productService.opProduct(this.dialogForm.value, this.dataToEdit)
        .subscribe({
          next: data => {
            this.dialogForm.reset();
            this.dialogRef.close();
            this.SpinnerService.hide()
            this.activeBtn = true;
          },
          error: err => {
            console.log(err)
            this.SpinnerService.hide();
            this.activeBtn = true;
          }
        })
    }
  }

  private dataToForm(){
    this.dialogForm.controls['id'].setValue(this.dataToEdit.id);
    this.dialogForm.controls['name'].setValue(this.dataToEdit.name);
    this.dialogForm.controls['type'].setValue(this.dataToEdit.type);
    this.dialogForm.controls['price'].setValue(this.dataToEdit.price);
  }
}
