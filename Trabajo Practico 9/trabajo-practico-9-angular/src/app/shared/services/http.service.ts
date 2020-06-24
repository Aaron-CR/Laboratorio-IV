import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instrumento } from '../models/instrumento';
const path = 'http://localhost:8080/api/v1/instrumentos';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(path);
  }

  getOne(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(`${path}/${id}`);
  }

  create(data: Instrumento): Observable<Instrumento> {
    return this.http.post<Instrumento>(path, data);
  }

  update(id: number, data: Instrumento): Observable<Instrumento> {
    return this.http.put<Instrumento>(`${path}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${path}/${id}`);
  }

  uploadFile(file: FormData) {
    return this.http.post(`${path}/images`, file, { responseType: 'text' });
  }

}
