import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private http: HttpClient) {}

  post<T>(endpoint: string, body: Object, params?: HttpParams): Observable<T> {
    const url = `${environment.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, body, { params });
  }

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = `${environment.apiUrl}/${endpoint}`;
    return this.http.get<T>(url, { params });
  }

  put<T>(endpoint: string, body: Object, params?: HttpParams): Observable<T> {
    const url = `${environment.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, body, { params });
  }

  delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = `${environment.apiUrl}/${endpoint}`;
    return this.http.delete<T>(url, { params });
  }
}
