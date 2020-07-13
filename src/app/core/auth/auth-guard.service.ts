import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectIsAuthenticated } from './auth.selectors';
import { IAppState } from '../core.state';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private store: Store<IAppState>) {}

    canActivate(): Observable<boolean> {
        return this.store.pipe(select(selectIsAuthenticated));
    }
}