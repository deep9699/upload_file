import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { stu } from '../student';

@Component({
  selector: 'app-editdtudent',
  templateUrl: './editdtudent.component.html',
  styleUrls: ['./editdtudent.component.css']
})
export class EditdtudentComponent implements OnInit {
  
id1:number;
id:number;
name:string;
per:number;
res:string;

  constructor(private _router:Router,private _actrouter:ActivatedRoute,private _ser:StudentService) { }

  onsave(){
    this._ser.UpdateStudent(new stu(this.id,this.name,this.per,this.res)).subscribe(
      (data:any)=>
      {
        this._router.navigate(['']);
      }
    );
  }

  ngOnInit() {
  this.id1=this._actrouter.snapshot.params['id'];
  console.log(this.id1);
    this._ser.getStudentById(this.id1).subscribe(
      (data:stu[])=> 
      {
        this.id=data[0].id;
        this.name=data[0].name;
        this.per=data[0].percentage;
        this.res=data[0].result;
      }
    );
  }

}
