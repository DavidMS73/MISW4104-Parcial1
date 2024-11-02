import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Plant } from '../plant';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }
}
