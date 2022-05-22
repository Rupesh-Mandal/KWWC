import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./mycomponent/home/home.component";
import {AuthComponent} from "./mycomponent/auth/auth.component";
import {DashboardComponent} from "./mycomponent/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: AuthComponent,
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
