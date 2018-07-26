import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { stu } from './student/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string='http://localhost:3000/student/';

  constructor(private _http:HttpClient) { 

  }
  getAllStudent(){
    return this._http.get(this.url);
  }
  getStudentById(id:number){
    return this._http.get(this.url+id);
  }
  addStudent(item:stu){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  UpdateStudent(item:stu){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.id,body,{headers:head1});
  }
  deleteStudent(item:number){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item,{headers:head1});
  }
}
