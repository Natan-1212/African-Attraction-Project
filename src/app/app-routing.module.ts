import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AttractionsComponent} from './attractions/attractions.component';
import { SafetyComponent} from './safety/safety.component';
import { ContactComponent } from './contact/contact.component';
import { UpdatesComponent } from './updates/updates.component';


const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "attractions", component: AttractionsComponent },
    { path: "safety", component: SafetyComponent },
    { path: "contact", component: ContactComponent },
    { path: "updates", component: UpdatesComponent},
    { path: '', redirectTo: '/home' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
