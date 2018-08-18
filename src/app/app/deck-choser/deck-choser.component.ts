import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-deck-choser',
	templateUrl: './deck-choser.component.html',
	styleUrls: ['./deck-choser.component.scss']
})
export class DeckChoserComponent implements OnInit {
	public deckSizes: any[] = [3, 4, 5];

	constructor() {
		this.deckSizes = [...this.deckSizes].map((el) => ({ value: el }));
	}

	ngOnInit() {
	}

	startGame() {
		console.log('new game');
	}
}
