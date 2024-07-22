import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlApi = 'https://api.mymemory.translated.net/get';

  constructor(private http: HttpClient){}

  public getData(text: string, langpair: string): Observable<any>{
    const url = `${this.urlApi}?q=${encodeURIComponent(text)}&langpair=${langpair}&mt=0`;
    return this.http.get<any>(url);
  }
}
