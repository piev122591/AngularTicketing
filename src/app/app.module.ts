import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RestangularModule } from 'ngx-restangular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RestangularConfigFactory } from './core/factories/restangular-config.factory';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RestangularModule.forRoot([BsModalService], RestangularConfigFactory),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
