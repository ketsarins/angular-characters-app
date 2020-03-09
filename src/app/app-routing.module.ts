import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { 
    path: '',   
    redirectTo: '/characters', 
    pathMatch: 'full' 
  },
  // { path: '**', component: PageNotFoundComponent } TODO:: implement PageNotFoundComponent 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
