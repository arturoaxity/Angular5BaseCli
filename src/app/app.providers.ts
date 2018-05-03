import { DataService } from './services/data.service';
import { ConsumeService } from './services/consume.service';
import { GitHubService } from './services/git-hub.service';
import { ColorServiceService } from './services/color-service.service';
import { LoginServiceUser } from './services/login.service';
import {RegisterService} from './services/register-service';
export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubService,
    ColorServiceService,
    LoginServiceUser,
    RegisterService
];
