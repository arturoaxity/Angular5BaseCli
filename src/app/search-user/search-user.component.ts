import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { GitHubService } from '../services/git-hub.service';

@Component({
    selector :   'app-search-component',
    templateUrl: './search-user.component.html',
    styleUrls:   ['./search-user.component.css']
})

export class SearchComponent implements OnInit , OnDestroy {
    private userName ;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() public onSearhName = new EventEmitter<string>();

    constructor() {

    }
    ngOnInit() {

    }

    onSearchClick() {
     this.onSearhName.emit(this.userName);
    }

    ngOnDestroy() {

    }

}
