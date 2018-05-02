import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SkillDetailsModel} from '../Model/SkillDetailsModel'
import { AppSettings} from '../Shared/AppSettings';

@Injectable()
export class SkillServiceService {

  API_URL:string = AppSettings.API_ENDPOINT+ 'SkillDetails/';
  constructor( private _http: Http) {
  }

  getAllSkills(param1:string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('name',param1);    
    return this._http.get(this.API_URL+'GetAllSkillDetails/', { headers: headers})
        .map(res => <SkillDetailsModel[]>res.json())
        .catch(this.handleError);
}

AddSkill(skill:SkillDetailsModel)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(skill);
    return this._http.post(this.API_URL+'AddSkill/', body, options )
        .map((res: Response) => res.json())
        .catch(this.handleError);
}

UpdateSkill(skill:SkillDetailsModel)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(skill);
    return this._http.post(this.API_URL+'UpdateSkill/', body, options )
        .map((res: Response) => res.json());
}

DeleteSkill(skill:SkillDetailsModel)
{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(skill);
    return this._http.post(this.API_URL+'DeleteSkill/', body, options )
        .map((res: Response) => res.json());
}

private handleError(error: Response) {
  console.error(error);
  return Observable.throw(error.json().error || 'Server error');
}

}
