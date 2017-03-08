import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AuthGuard } from './common/auth.guard';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AgmCoreModule} from 'angular2-google-maps/core';
import {AlumnoService} from './services/AlumnoService';
import {FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HomeAlumno } from './homealumno';
import { HomeProfesor } from './homeprofesor';
import { Intro} from './intro/intro';
import { LoginAlumno } from './loginalumno';
import { LoginProfesor } from './loginprofesor';
import { SignupAlumno } from './signupalumno';
import { SignupProfesor } from './signupprofesor';
import { ProfesorDetail } from './detail';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYUVL5zFNpT0vaziTcpEUUbsmqZ7YRERM'
    }),
    RouterModule.forRoot([
      { path: '',       component:  Intro },
      { path: 'alumno',  component: LoginAlumno },
      { path: 'profesor',  component: LoginProfesor },
      { path: 'signupalumno', component: SignupAlumno },
      { path: 'signupprofesor', component: SignupProfesor },
      { path: 'home',   component: HomeAlumno, canActivate: [AuthGuard] },
      { path: 'profile',   component: HomeProfesor, canActivate: [AuthGuard] },
      { path: 'detail/:id', component: ProfesorDetail, canActivate: [AuthGuard] },
      { path: '**',     redirectTo: ''}
    ])
  ],
  declarations: [
    AppComponent,
    Intro,
    LoginAlumno,
    LoginProfesor,
    SignupAlumno,
    SignupProfesor,
    HomeAlumno,
    HomeProfesor,
    ProfesorDetail
  ],
  bootstrap: [ AppComponent ],
  providers: [
    AuthGuard, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }, AlumnoService
  ]
})

export class AppModule {

}

