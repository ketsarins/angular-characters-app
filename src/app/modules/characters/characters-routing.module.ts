import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from "./character-list/character-list.component";


const charactersRoutes: Routes = [
  { 
    path: 'characters',
    component: CharacterListComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(charactersRoutes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
