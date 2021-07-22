import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  constructor(private http: HttpClient) { }

  public Get(apiDetails: any){
    return this.http.get(apiDetails.url, apiDetails.options)
  }

  public Post(apiDetails: any){
    return this.http.post(apiDetails.url, apiDetails.payload)
  }
}
