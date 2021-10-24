import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path:'auth',
    component:BlankComponent,
    children:[
      {
        path:'',
        loadChildren: ()=> import('./modules/auth/auth.module').then( m => m.AuthModule)
      }
    ]
  },
  {
    path:'',
    component:FullComponent,
    children:[
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path:'',
        loadChildren: ()=> import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
