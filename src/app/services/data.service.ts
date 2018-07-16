
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueModel } from '../models/IssueModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
  }

  getListOfIssues(): Observable <IssueModel[]>{
    let dataURL = 'https://auditwolftestdata.azurewebsites.net/api/SecurityControlRecommendations';
    
    return this.http.get<IssueModel[]>(dataURL);
  }
  
  getInfoForLevelC(){

  }
}
