import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckChoserComponent } from './deck-choser.component';

describe('DeckChoserComponent', () => {
	let component: DeckChoserComponent;
	let fixture: ComponentFixture<DeckChoserComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DeckChoserComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DeckChoserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
