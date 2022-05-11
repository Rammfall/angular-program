import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LogoComponent } from '../../shared/logo/logo.component';

@NgModule({
  declarations: [
    CoursesComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
  ],
  imports: [CommonModule],
})
export class CoursesModule {}
