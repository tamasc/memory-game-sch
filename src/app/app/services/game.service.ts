import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private deckSize = 3;

	constructor() { }

	getDeckSize() {
		return this.deckSize;
	}

	setDeckSize(deckSize) {
		this.deckSize = deckSize;
	}
}
