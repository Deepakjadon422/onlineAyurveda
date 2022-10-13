import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './med';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }
  getMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(`${this.baseUrl}/medicines`);
  }
  addMedicine(medicine:Medicine):Observable<Medicine>{
    return this.http.post<Medicine>(`${this.baseUrl}/medicine/`,medicine);
  }
  updateMedicine(medicine : Medicine):Observable<Medicine>{
    return this.http.put<Medicine>(`${this.baseUrl}/medicine/medicine`,medicine);
  }
  deleteMedicine(medicineId:string):Observable<Medicine>{
    return this.http.delete<Medicine>(`${this.baseUrl}/medicines/${medicineId}`);
  }
}
