import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { FindtransportComponent } from './components/findtransport/findtransport.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from '@app/services/users.service';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    AboutModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DriversComponent,
    DestinationsComponent,
    FindtransportComponent,
    MessagesComponent,
    RegisterComponent,
    UserComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
