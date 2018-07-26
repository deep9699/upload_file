import { Injectable } from '@angular/core';
import { cat_class } from './category/cat_class';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private url='http://localhost:3000/category/';
  getAllCategory()
  {
    return this._ser.get(this.url);
  }
  getAllCategoryById(id:number)
  {
    return this._ser.get(this.url+id);
  }
  addCategory(item:cat_class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._ser.post(this.url,body,{headers:head1});
  }
  deleteCategory(item:cat_class)
  {
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._ser.delete(this.url+item.cat_id,{headers:head1});
  }
  updatecategory(item:cat_class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._ser.put(this.url+item.cat_id,body,{headers:head1});  
  }
  constructor(private _ser:HttpClient) { }
}
