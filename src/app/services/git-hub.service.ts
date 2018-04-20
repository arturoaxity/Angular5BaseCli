import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { GitHubModel } from '../model/git-hub-model';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

// https://api.github.com/users
// http://10.11.1.100:8080/users
const _getUsersUrls = 'http://10.11.1.100:8080/users';
@Injectable()
export class GitHubService {
    constructor(private _httpClient: HttpClient) {

     }
    getUserInfo(userName: string) {
    return this._httpClient.get(`${_getUsersUrls}/${userName}`, {responseType: 'json'}).map((x: any) => {
    // tslint:disable-next-line:prefer-const
    let gitHubObj = new GitHubModel();
        gitHubObj.avatar_url = x.avatar_url;
        gitHubObj.login = x.login;
        gitHubObj.name = x.name;
        gitHubObj.followers = x.followers;
        gitHubObj.following = x.following;
        return gitHubObj;
    }).catch(this.handleError);
    }

    handleError(error: any) {
    console.log(`Error : ${error}`);
    return Observable.throw(error.json() || 'Server Error');
    }

}
