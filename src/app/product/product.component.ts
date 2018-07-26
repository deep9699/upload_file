import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arr:product[]=[];
  q;
  flag:boolean=false;
  sta:string[]=[
    'available',
    'unavailable'
  ]

  id1:number;
  name1:string;
  price1:number;
  quantity1:number;
  sts1:string;
  pimg:string;
  selectedFile:File=null;

  onclickAdd()
  {
    if(this.quantity1<=0)
    {
     this.sts1="unavailable"; 
    }
    else
    {
      this.sts1="available";
    }
    const fd=new FormData();
    fd.append('p_id',this.id1.toString());
    fd.append('p_name',this.name1);
    fd.append('p_price',this.price1.toString());
    fd.append('p_quantity',this.quantity1.toString());
    fd.append('p_status',this.sts1);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this._xyz.addProduct(fd).subscribe(
      (data:any)=>{
         this.arr.push(new product(this.id1,this.name1,this.price1,this.quantity1,this.sts1,this.pimg));
        console.log(data);
      }
    );

  
    
   this.flag=false;
  }

  onDelete(item:product){
this._xyz.deleteProduct(item).subscribe(
  (data:any)=>{
    this.arr.splice(this.arr.indexOf(item),1);
  }
);
  }

  onDel(index)
  {
    this.arr.splice(index,1)
  }
  onAdd()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onUp(item:product)
  {
    this._route.navigate(['/editproduct',item.p_id]);
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  constructor(private _route:Router,private _xyz:ProductService) { }

  ngOnInit() {
    this._xyz.getAllProduct().subscribe(
      (data:product[])=>{
        this.arr=data
        console.log(this.arr);
        
      }
    );
  }

}
