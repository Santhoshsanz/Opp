import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { IndexComponent } from './index/index.component';
import {OpportunitiesService} from './opportunities.service';
import {HttpModule,Headers,Response} from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {ReactiveFormsModule } from '@angular/forms';
// routes
const appRoutes:Routes = [
  {path:'',redirectTo:'index' ,pathMatch:"full"},
  { path: 'index', component: IndexComponent },
  { path: 'opportunities/:pageNum', component: OpportunitiesComponent },
  {path:'**',redirectTo:'' ,pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    OpportunitiesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BootstrapModalModule
  ],
  providers: [
    OpportunitiesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
