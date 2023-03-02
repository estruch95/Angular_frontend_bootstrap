import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserOptionsListComponent } from './componentes/user-options-list/user-options-list.component';
import { HeaderComponent } from './componentes/header/header.component';
import { UserAccountsListComponent } from './componentes/user-accounts-list/user-accounts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserOptionsListComponent,
    HeaderComponent,
    UserAccountsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
