import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { product } from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id:number;
  id1:number;
  name1:string;
  price1:number;
  quantity1:number;
  sts1:string;
  pimg:string;
  sta:string[]=[
    'available',
    'not available'
  ];
  constructor(private _abc:Router,private _actroute:ActivatedRoute,private _update:ProductService) { }

  ngOnInit() {
    this.id=this._actroute.snapshot.params['id'];
    this._update.getProductById(this.id).subscribe(
      (data:product[])=>{
          this.id1=data[0].p_id;
          this.name1=data[0].p_name;
          this.price1=data[0].p_price;
          this.quantity1=data[0].p_quantity;
          this.sts1=data[0].p_status;
          this.pimg=data[0].p_img;
      }
    );
  }
  onSave(){
    this._update.updateProduct(new product(this.id1,this.name1,this.price1,this.quantity1,this.sts1,this.pimg)).subscribe(
    (data:any)=>{
      this._abc.navigate(['/product']);
    }
    );
  }
}
