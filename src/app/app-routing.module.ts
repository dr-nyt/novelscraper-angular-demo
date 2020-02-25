import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArviewComponent } from './arview/arview.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'arview', component: ArviewComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
