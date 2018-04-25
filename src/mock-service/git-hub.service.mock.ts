import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { GitHubModel } from '../app/model/git-hub-model';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

// https://api.github.com/users
// http://10.11.1.100:8080/users
const _getUsersUrls = 'https://api.github.com/users';
@Injectable()
export class GitHubServiceMock {
    constructor(private _httpClient: HttpClient) {

     }

     getUserInfo(userName: String) {
         const gitHubObj = new GitHubModel();
         gitHubObj.avatar_url = '';
         gitHubObj.login = 'arturoAxity';
         gitHubObj.name = 'arturo';
         gitHubObj.followers = 5;
         gitHubObj.following = 3;
         return Observable.of(gitHubObj).catch(this.handleError);
     }

    handleError(error: any) {
    console.log(`Error : ${error}`);
    return Observable.throw(error.json() || 'Server Error');
    }

}
