import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {


  constructor(private httpClient:HttpClient) { }

  public getProfile(searchQuery){
    let dataURL = 'https://api.github.com/users/'
  }



}
