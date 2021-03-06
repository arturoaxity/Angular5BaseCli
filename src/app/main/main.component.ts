import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { SearchComponent } from '../search-user/search-user.component';
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gitHubData: GitHubModel;
  gitHubDataList: Array<GitHubModel>;
  constructor(private _gt: GitHubService) {
    this.gitHubDataList = new Array<GitHubModel>();
   }

  ngOnInit() {

  }

  onSearhName(event) {
    this._gt.getUserInfo(event).subscribe(value => {
      this.gitHubDataList.push(value);
    });
  }

  removeElement(element: GitHubModel) {
    // const index = this.gitHubDataList.indexOf(element);
    // console.log(`${element} ${index}`);
    this.gitHubDataList = this.gitHubDataList.filter(x => x !== element);
    // this.gitHubDataList.splice(index, 1);

  }
}
