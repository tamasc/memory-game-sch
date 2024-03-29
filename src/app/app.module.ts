import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { HeaderComponent } from './app/header/header.component';
import { GameComponent } from './app/game/game.component';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { DeckChoserComponent } from './app/deck-choser/deck-choser.component';

import { GameService } from './app/services/game.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		GameComponent,
		PageNotFoundComponent,
		DeckChoserComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatSelectModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
	],
	providers: [
		GameService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
