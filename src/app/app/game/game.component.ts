import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	private allCards = [
		'angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'supercharge', 'ts', 'webpack'
	];

	private playingCards: string[];
	public currentCards: string[];
	public prevoiuslyChosenCard = '';

	constructor(
		private gameService: GameService,
	) { }

	ngOnInit() {
		this.playingCards = this.getRandomCards(this.allCards, this.gameService.getDeckSize());
		this.currentCards = this.shuffleCards([...this.playingCards, ...this.playingCards]);
	}

	// found from stackoverflow
	getRandomCards(cardsArray: string[], numberOfDecks: number): string[] {
		const cards = [...cardsArray];
		const result = new Array(numberOfDecks);
		let length = cards.length;
		const taken = new Array(length);
		while (numberOfDecks--) {
			const x = Math.floor(Math.random() * length);
			result[numberOfDecks] = cards[x in taken ? taken[x] : x];
			taken[x] = --length in taken ? taken[length] : length;
		}
		return result;
	}

	// found from stackoverflow
	shuffleCards(cardsArray: string[]): string[] {
		const array = [...cardsArray];
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	chooseCard(card: any) {
		if (this.prevoiuslyChosenCard) {
			if (this.prevoiuslyChosenCard === card) {
				this.playingCards.filter(el => el === card);
			}
		} else {
			this.prevoiuslyChosenCard = card;
		}
	}

}
