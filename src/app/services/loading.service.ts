import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoadingService {
  public loading$ = new BehaviorSubject<boolean>(false);

  private _loading = false;

  public set(value: boolean) {
    if (this._loading !== value) {
      this.loading$.next(value);
      this._loading = value;
    }
  }
}
