import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cat_class } from './cat_class';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  flag:boolean=false;
  cat_id:number;
  cat_name:string;
  is_active:string;
  arr:cat_class[]=[];
  constructor(private _ser:CategoryService,private _router:Router) { }

  ngOnInit() {
    this._ser.getAllCategory().subscribe(
      (data:any)=>
      {
        this.arr=data;
      }
    );
  }
  
  onAdd()
  {
    if(this.flag==true)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onclickAdd()
  {
    this._ser.addCategory(new cat_class(this.cat_id,this.cat_name,this.is_active)).subscribe(
      (data:any)=>
      {
        this.arr.push(new cat_class(this.cat_id,this.cat_name,this.is_active));
      }
    );
    this.flag=false;
  } 
  onUp(item:cat_class)
  {
    this._router.navigate(['/editcategory',item.cat_id]);
  }
  onDel(i:cat_class)
  {
    this._ser.deleteCategory(i).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.arr.splice(this.arr.indexOf(i),1);
      }
    );

  }
}
