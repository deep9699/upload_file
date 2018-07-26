import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule,MatSortModule,MatProgressSpinnerModule,MatPaginatorModule,MatButtonModule,MatCheckboxModule,MatTableModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';


import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { EditdtudentComponent } from './student/editdtudent/editdtudent.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    TodoComponent,
    ProductComponent,
    StudentComponent,

    CategoryComponent,
    HeaderComponent,
    EdittodoComponent,
    EditproductComponent,
    EditdtudentComponent,
    EditcategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
