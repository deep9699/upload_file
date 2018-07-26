import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cat_class } from '../cat_class';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  id: number;
  cat_id1: number;
  cat_name1: string;
  is_active1: string;
  constructor(private _ser: CategoryService, private _actrouter: ActivatedRoute, private _router: Router) { }

  onsave()
  {
    this._ser.updatecategory(new cat_class(this.cat_id1,this.cat_name1,this.is_active1)).subscribe(
      (data:any)=>
      {
        
        this._router.navigate(['/category']);
      }
    );
  }
  ngOnInit() {
    this.id = this._actrouter.snapshot.params['id'];
    console.log(this.id);
    this._ser.getAllCategoryById(this.id).subscribe(
      (data: cat_class[]) => {
        console.log(data);
        this.cat_id1 = data[0].cat_id;
        this.cat_name1 = data[0].cat_name;
        this.is_active1 = data[0].is_active;
      }
    );
  }

}
