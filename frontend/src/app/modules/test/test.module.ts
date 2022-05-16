import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './components/test/test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [CommonModule, TestRoutingModule],
  declarations: [TestComponent]
})
export class TestModule {}
