import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path : 'editor', component : EditorComponent},
  {path : '', component : HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
