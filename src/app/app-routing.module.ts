import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { FindtransportComponent } from './components/findtransport/findtransport.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from '@app/components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'findtransport', component: FindtransportComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
