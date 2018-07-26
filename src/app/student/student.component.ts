import { Component, OnInit } from '@angular/core';
import { stu } from './student';
import { StudentService  } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
arr:stu[]=[];
d:number=0;
flag:boolean;
id:number;
name:string;
per:number;
res:string;
e;
flaga:boolean;
flagu:boolean;
onDel(item:stu)
{
  
  this._xyz.deleteStudent(item.id).subscribe(
    (data:any)=>{
      this.arr.splice(this.arr.indexOf(item),1);
    }
  );
  
}
onUpdate(item:stu)
{

  this._rou.navigate(['/editdtudent',item.id]);
  
}

onclickAdd()
{
  this.flagu=false;
  if(this.per>=35)
  {
    this.res='pass';
  }
  else
  {
    this.res='fail';
  }
  this._xyz.addStudent(new stu(this.id,this.name,this.per,this.res)).subscribe(
    (data:any)=>{
      this.arr.push(new stu(this.id,this.name,this.per,this.res));
    }
  );
  
  this.flag=false;
  this.flaga=false;
}
onAdd()
{
  this.flagu=false;
  if(this.flag)
  {
    this.flag=false;
    this.flaga=false;
  }
  else
  {
    this.flag=true;
    this.flaga=true;
  }
}
  constructor(private _xyz:StudentService,private _rou:Router) { }

  ngOnInit() {
    this._xyz.getAllStudent().subscribe(
      (data:stu[])=>{
        this.arr=data;
        console.log(this.arr);
      }
    );
  }

}
