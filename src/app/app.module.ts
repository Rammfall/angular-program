import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ListComponent } from './shared/list/list.component';
import { CourseItemComponent } from './shared/list/course-item/course-item.component';
import { SearchComponent } from './shared/list/search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  declarations: [
    CoursesComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ListComponent,
    CourseItemComponent,
    SearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
