import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {timer} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {delay} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';

@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  public invocationCount = 0;

  public todos$ = this.http.get('https://jsonplaceholder.typicode.com/todos');
  public todo1$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

  constructor(private http: HttpClient) {
  }

  public ngOnInit() {
    timer(0, 1000)
      .pipe(untilDestroyed(this))
      .subscribe(v => console.log(v));
  }

  public get test(): string {
    this.invocationCount++;
    console.log('count - ', this.invocationCount);
    return 'test';
  }

  public ngOnDestroy() {
    //
  }
}
