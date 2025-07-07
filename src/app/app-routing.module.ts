import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redireciona a raiz para /home
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
