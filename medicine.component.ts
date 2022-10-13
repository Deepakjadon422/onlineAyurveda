import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Medicine } from '../med';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicine:Medicine[];
  constructor(private med:MedicineService) { }

  ngOnInit(): void {
    this.getMedicines();
  }
  public getMedicines():void{
    this.med.getMedicines().subscribe(
      (response:Medicine[])=>{
        this.medicine=response; 
      },
      (error:HttpErrorResponse)=>{
       console.log(error);
      }
    )
  }

}
