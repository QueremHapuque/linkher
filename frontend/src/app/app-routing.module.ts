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
import { OpportunityDetailComponent } from './opportunity-detail/opportunity-detail.component';
import { PageOneComponent } from './slider/page-one/page-one.component';
import { PageTwoComponent } from './slider/page-two/page-two.component';
import { PageThreeComponent } from './slider/page-three/page-three.component';
import { PageFourComponent } from './slider/page-four/page-four.component';

const routes: Routes = [
  {
    path: 'home',
    component: OpportunitiesComponent,
    pathMatch: 'full'
  },
  {
    path: 'oportunidade/:id',
    component: OpportunityDetailComponent,
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
    path: 'inicio',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: PageOneComponent,
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
  },
  {
    path: 'page-one',
    component: PageOneComponent,
    pathMatch: 'full'
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
    pathMatch: 'full'
  },
  {
    path: 'page-three',
    component: PageThreeComponent,
    pathMatch: 'full'
  },
  {
    path: 'page-four',
    component: PageFourComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
