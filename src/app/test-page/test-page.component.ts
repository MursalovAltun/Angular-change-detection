import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent {
  constructor() {
    console.log('test');
  }
}
