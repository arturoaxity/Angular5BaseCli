import { Component, OnInit, OnDestroy, style, Input, EventEmitter,  Output} from '@angular/core';
import { GitHubModel } from '../model/git-hub-model';
@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit , OnDestroy {

    // tslint:disable-next-line:no-input-rename
    @Input('github-data') gitHubData: GitHubModel;
    @Output() public remove = new EventEmitter<GitHubModel>();
    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {

    }

    onRemoveClick() {
        this.remove.emit(this.gitHubData);
    }
}
