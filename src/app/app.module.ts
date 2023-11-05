import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmarPresencaComponent } from './pages/confirmar-presenca/confirmar-presenca.component';
import { ConfirmarPresenteComponent } from './pages/confirmar-presente/confirmar-presente.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ModalChooseComponent } from './modal/modal-choose/modal-choose.component';
import { LocalComponent } from './pages/local/local.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmarPresencaComponent,
    ConfirmarPresenteComponent,
    ModalChooseComponent,
    LocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
