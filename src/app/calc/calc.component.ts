import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  y:string="";
  no1:number;
  no2:number;
  ans:number;
  f:number;
  onclick1()
  {
    this.y+="1";
  }
  onclick2()
  {
    this.y+="2";
  }
  onclick3()
  {
    this.y+="3";
  }
  onclick4()
  {
    this.y+="4";
  }
  onclick5()
  {
    this.y+="5";
  }
  onclick6()
  {
    this.y+="6";
  }
  onclick7()
  {
    this.y+="7";
  }
  onclick8()
  {
    this.y+="8";
  }
  onclick9()
  {
    this.y+="9";
  }
  onclick0()
  {
    this.y+="0";
  }
  onclickplus()
  {
    this.no1=parseInt(this.y);
    this.y="";
    this.f=1;
  }
  onclickmin()
  {
    this.no1=parseInt(this.y);
    this.y="";
    this.f=2;
  }
  onclickmul()
  {
    this.no1=parseInt(this.y);
    this.y="";
    this.f=3;
  }
  onclickdiv()
  {
    this.no1=parseInt(this.y);
    this.y="";
    this.f=4;
  }
  onclickc()
  {
    this.no1=0;
    this.no2=0;
    this.y="";
    this.ans=0;
    this.f=0;
  }
  
  onclickeq()
  {
    this.no2=parseInt(this.y);
    if(this.f==1)
    {
      this.ans=this.no1+this.no2;
      this.y=this.ans+"";
    }
    else if(this.f==2)
    {
      this.ans=this.no1-this.no2;
      this.y=this.ans+"";
    }
    else if(this.f==3)
    {
      this.ans=this.no1*this.no2;
      this.y=this.ans+"";
    }
    else if(this.f==4)
    {
      this.ans=this.no1/this.no2;
     this.y=this.ans+"";
    }
    else
    {
      
      
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
