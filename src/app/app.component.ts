import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public loading$ = this.loadingService.loading$.pipe(delay(0));

  constructor(public loadingService: LoadingService) {
  }
}
