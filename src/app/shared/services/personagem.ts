import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTodosPersonagens(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPersonagemPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}