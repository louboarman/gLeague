import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRoundListComponent } from './player-round-list.component';

describe('PlayerRoundListComponent', () => {
  let component: PlayerRoundListComponent;
  let fixture: ComponentFixture<PlayerRoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRoundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
