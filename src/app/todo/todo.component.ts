import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './Task';
import {PageEvent, MatPaginator, MatSort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit { 
  arr:Task[]=[];
  displayedColumns: string[] = ['Action','Id','Title','Status'];
  dataSource=new MatTableDataSource();
  delarr:Task[]=[];
  i:number=0;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  statusarr:string[]=[
    'done',
    'pending'
  ];
  

onAdd(x,y,z){

this._xyz.addTask(new Task(x,y,z)).subscribe(
  (data:any)=>{
    console.log(data);
    this.arr.push(new Task(x,y,z));
    this.ngOnInit();
  }
);

}

checkChange(item:Task)
{
  
   if (this.delarr.find(x => x == item)) {
     this.delarr.splice(this.delarr.indexOf(item), 1)
     } else {
     this.delarr.push(item);
    }
    console.log(item);
}

onclickdeleteAll()
{

  this._xyz.deleteAll(this.delarr).subscribe(
    (data:any)=>
    {
      for (this.i = 0; this.i < this.delarr.length; this.i++) {
        if (this.arr.find(x => x == this.delarr[this.i])) {
        this.arr.splice(this.arr.indexOf(this.delarr[this.i]), 1);
        }
      }
      this.dataSource.data=this.arr;
    }
  );
}

  onDelete(i){

    this._xyz.deleteTask(i).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(i),1);
      }
    );
    // this.arr.splice(i,1);
    
  }
  onEdit(item:Task){
    this._abc.navigate(['/edittodo',item.Id]);

  }
  onUpdate(item:Task){
    
    this._xyz.updateTask(item).subscribe(
      (data:any)=>{
        if(item.Status=='done'){
          item.Status='pending';
        }
        else{
          item.Status='done';
        }    
      }
    )

  }
  constructor(private _xyz:TodoService,private _abc:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._xyz.getAllTask().subscribe(
      (data:Task[])=>{
        this.arr=data;
        this.dataSource.data=this.arr;
      }
    );
  }

}
