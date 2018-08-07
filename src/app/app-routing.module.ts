import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorksComponent } from './works/works.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'works', component: WorksComponent },
	{ path: 'questionnaire', component: QuestionnaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }