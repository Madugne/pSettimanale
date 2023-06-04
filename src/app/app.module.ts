import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CompletatiComponent } from './completati/completati.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'completati', component: CompletatiComponent },
];

@NgModule({
  declarations: [AppComponent, ToDoComponent, CompletatiComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
