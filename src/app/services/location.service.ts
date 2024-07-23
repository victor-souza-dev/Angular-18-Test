import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationApi } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url = "https://servicodados.ibge.gov.br/api/v1/localidades";

  constructor(private http: HttpClient) { }

  locations(): Observable<LocationApi[]> {
    return this.http.get<LocationApi[]>(`${this.url}/estados/rs/mesorregioes`);
  }
}
