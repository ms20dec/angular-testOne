import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewCmpcomponentComponent } from './new-cmpcomponent/new-cmpcomponent.component';
import { AngularDerectivesDirective } from './angular-derectives.directive';
import { SqrtPipe } from './sqrt.pipe';
import { MyserviceService } from './myservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'new-cmpcomponent',
        component: NewCmpcomponentComponent
      }
    ])],
  declarations: [AppComponent, HelloComponent, NewCmpcomponentComponent, AngularDerectivesDirective, SqrtPipe,],
  bootstrap: [AppComponent],
  providers: [MyserviceService]
})
export class AppModule { }
