import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { BabeirosComponent } from './pages/babeiros/babeiros.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redireciona a raiz para /home
  { path: 'home', component: HomeComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'barbeiros', component: BabeirosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
