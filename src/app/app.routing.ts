import { Routes,RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';
import { CategoryComponent } from './category/category.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { EditdtudentComponent } from './student/editdtudent/editdtudent.component';
import { EditcategoryComponent } from './category/editcategory/editcategory.component';

const arr:Routes=[
 {path:'',component:StudentComponent},
 {path:'product',component:ProductComponent},
 {path:'todo',component:TodoComponent},
 {path:'category',component:CategoryComponent},
 {path:'edittodo/:id',component:EdittodoComponent},
 {path:'editproduct/:id',component:EditproductComponent},
 {path:'editdtudent/:id',component:EditdtudentComponent},
 {path:'editcategory/:id',component:EditcategoryComponent}
];

export const routing=RouterModule.forRoot(arr);