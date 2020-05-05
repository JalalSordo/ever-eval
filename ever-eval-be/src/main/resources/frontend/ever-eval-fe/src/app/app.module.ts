import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffModule } from './modules/staff/staff.module';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { CandidatesModule } from './modules/candidates/candidates.module';
import { HomeModule } from './modules/home/home.module';
import { ResultsModule } from './modules/results/results.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { LoginModule } from './modules/login/login.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideMenuComponent } from './components/menu-components/side-menu/side-menu.component';
import { SideMenuElementComponent } from './components/menu-components/side-menu-element/side-menu-element.component';
import { NotifComponent } from './components/menu-components/notif/notif.component';
import { HeaderComponent } from './components/menu-components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataBase } from './services/mock/in-memory-database.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TestModule } from './modules/test/test.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { EmailModule } from './modules/email/email.module';
import { HttpInterceptorModule } from './http-interceptor.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SideMenuComponent,
    SideMenuElementComponent,
    NotifComponent,
    HeaderComponent,
    ContainerComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module,
    LoginModule,
    TestModule,
    StaffModule,
    QuizzesModule,
    CandidatesModule,
    EmailModule,
    HomeModule,
    ResultsModule,
    QuestionsModule,
    AppRoutingModule,
    NgxPaginationModule,
    DataTablesModule,
    ReactiveFormsModule,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
