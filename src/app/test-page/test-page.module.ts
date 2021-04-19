import {NgModule} from '@angular/core';
import {TestPageComponent} from './test-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TestPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: TestPageComponent}
    ])
  ],
})
export class TestPageModule {
}
