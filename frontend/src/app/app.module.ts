import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { ChangeEmailModalComponent } from './change-email-modal/change-email-modal.component';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';
import { DeleteAccountModalComponent } from './delete-account-modal/delete-account-modal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterOpportunitiesComponent } from './register-opportunities/register-opportunities.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AccountSettingsComponent,
    ChangeEmailModalComponent,
    CurriculumComponent,
    LoginComponent,
    InicioComponent,
    RegisterComponent,
    ChangePasswordModalComponent,
    DeleteAccountModalComponent,
    AboutUsComponent,
    ContactComponent,
    RegisterOpportunitiesComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    AppRoutingModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
