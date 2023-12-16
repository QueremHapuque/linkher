import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterOpportunitiesComponent } from './register-opportunities/register-opportunities.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';

const routes: Routes = [
  {
    path: 'home',
    component: OpportunitiesComponent,
    pathMatch: 'full'
  },
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    pathMatch: 'full'
  },
  {
    path: 'curriculum',
    component: CurriculumComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'register-opportunities',
    component: RegisterOpportunitiesComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
