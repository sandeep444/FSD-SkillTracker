import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AssociateSkillsModel} from '../Model/AssociateSkillsModel'
import { AppSettings} from '../Shared/AppSettings';

@Injectable()
export class AssociateServiceService {

  API_URL:string = AppSettings.API_ENDPOINT+ 'AssociateDetails/';
  constructor( private _http: Http) {
  }

  GetAssociateSkillDetails(param1:number) {    
    return this._http.get(this.API_URL+'GetAssociateSkillDetails?id='+param1.toString())
        .map(res => <AssociateSkillsModel>res.json())
        .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
