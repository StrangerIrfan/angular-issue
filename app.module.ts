import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';

import { AppRoutingModule,  routingComponents} from './app-routing.module';

// Services goes here
import { AuthorService } from './services/author.service';
import { TypicodeDataService } from './services/typicode-data.service';

// Pipe goes here
import { TitleCasePipe } from './pipes/title-case.pipe';
import { CustomPipe } from './pipes/custom.pipe';

// Component goes here
import { AppComponent } from './app.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { SectionFiveComponent } from './components/section-five/section-five.component';
import { FavoriteComponent } from './reusable/favorite/favorite.component';
import { NgContentComponent } from './reusable/ng-content/ng-content.component';
import { TweetLikeComponent } from './reusable/tweet-like/tweet-like.component';
import { SectionSixComponent } from './components/section-six/section-six.component';
import { TextDirectiveDirective } from './custom_directive/text-directive.directive';
import { AccordianPanelComponent } from './reusable/accordian-panel/accordian-panel.component';
import { SectionSevenComponent } from './components/section-seven/section-seven.component';
import { SectionEightComponent } from './components/section-eight/section-eight.component';
import { SectionNineComponent } from './components/section-nine/section-nine.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    CustomPipe,
    TitleCasePipe,
    SectionFiveComponent,
    FavoriteComponent,
    routingComponents,
    NgContentComponent,
    TweetLikeComponent,
    SectionSixComponent,
    TextDirectiveDirective,
    AccordianPanelComponent,
    SectionSevenComponent,
    SectionEightComponent,
    SectionNineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    AuthorService,
    TypicodeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 