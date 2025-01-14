import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: 'livres', redirectTo: 'livres/index', pathMatch: 'full' },
  { path: 'livres/index', component: IndexComponent },
  { path: 'livres/:livreId/details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivresRoutingModule { }
