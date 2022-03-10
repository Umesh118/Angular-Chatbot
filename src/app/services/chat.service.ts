import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'https://api.dialogflow.com/v1/query?v=20150910';

  constructor(private http:HttpClient) { }

  public getResponse(query:string){
    const data = {
      query,
      lang: 'en',
      sessionId: this.uuidv4()
    };

    return this.http.post<any>(`${this.baseUrl}`, data, {headers: new HttpHeaders({
      'Content-Type':'application/json'
    })})
    .pipe(map(res => res));
  }

  uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v= c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }
}
