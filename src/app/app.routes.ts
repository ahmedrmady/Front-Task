import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes = [
  {path:'register',component:RegisterationComponent}
];


@NgModule({
    imports: [BrowserModule,HttpClientModule,NgbModule,ReactiveFormsModule, RouterModule.forRoot(routes,{useHash:true})],
    exports:[RouterModule],
    providers:[HttpClientModule]
  })
  export class AppRoutingModule {
    
  }