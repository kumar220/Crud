/* angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Third party */
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

/* app level */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpIdAddComponent } from './emp-id-add/emp-id-add.component';
import { EmpIdGetComponent } from './emp-id-get/emp-id-get.component';
import { EmpIdEditComponent } from './emp-id-edit/emp-id-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpIdAddComponent,
    EmpIdGetComponent,
    EmpIdEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SlimLoadingBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
