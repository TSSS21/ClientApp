import { AuthService } from './Services/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { SharedService } from 'src/app/Services/shared-service'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserEffects } from './store/user.effects';
import { GetUserComponent } from './get-user/get-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './_guards/auth-guard-service';
import { EditUserComponent } from './edit-user/edit-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SingleUserComponent } from './single-user/single-user.component';
@NgModule({
  declarations: [
    AppComponent,
    GetUserComponent, LoginComponent, EditUserComponent, SingleUserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,FormsModule,MatCardModule,MatButtonModule,MatInputModule,ReactiveFormsModule,
    MatFormFieldModule,MatToolbarModule,MatIconModule,MatDialogModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/login' },
      { path: 'login', component: LoginComponent },
      {
        path: 'Users',
        component: GetUserComponent,
         canActivate:[AuthGuardService]
      },
      {
        path: 'edit/:id',
        component: EditUserComponent,
        canActivate:[AuthGuardService]
       },
       {
        path: 'user/:id',
        component: SingleUserComponent,
        canActivate:[AuthGuardService]
       },
    ]),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [
    SharedService,
    AuthService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
