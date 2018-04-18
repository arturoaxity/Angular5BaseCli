import { Component , OnInit, OnDestroy} from '@angular/core';
import { GitHubModel } from '../model/git-hub-model';
@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styles: ['./git-hub-card.component.html']
})
export class GitHubCardComponent implements OnInit , OnDestroy {

    gitHubData: GitHubModel;
    constructor() {
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatar_url = 'https://cdn1.iconfinder.com/data/icons/business-charts/512/customer-512.png';
        this.gitHubData.followers = 0;
        this.gitHubData.following = 1;
        this.gitHubData.login = 'artur';
        this.gitHubData.name = 'Arturo';
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {

    }
}
