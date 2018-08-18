import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { GameComponent } from './app/game/game.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'game', component: GameComponent },
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
