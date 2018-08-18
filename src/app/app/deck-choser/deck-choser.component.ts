import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameService } from '../services/game.service';

@Component({
	selector: 'app-deck-choser',
	templateUrl: './deck-choser.component.html',
	styleUrls: ['./deck-choser.component.scss']
})
export class DeckChoserComponent implements OnInit {
	public deckSizes: any[] = [3, 4, 5];

	public chosenDeckSize: number;

	constructor(
		private gameService: GameService,
		private router: Router
	) {
		this.deckSizes = [...this.deckSizes].map((el) => ({ value: el }));
	}

	ngOnInit() {
		this.chosenDeckSize = this.gameService.getDeckSize();
	}

	startGame() {
		this.gameService.setDeckSize(this.chosenDeckSize);
		this.router.navigate(['/game']);
	}
}
