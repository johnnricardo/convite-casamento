import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmarPresencaComponent } from './pages/confirmar-presenca/confirmar-presenca.component';
import { ConfirmarPresenteComponent } from './pages/confirmar-presente/confirmar-presente.component';
import { LocalComponent } from './pages/local/local.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'confirmar', component: ConfirmarPresencaComponent},
  {path: 'presente', component: ConfirmarPresenteComponent},
  {path: 'local', component: LocalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
