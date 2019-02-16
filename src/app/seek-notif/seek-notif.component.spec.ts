import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekNotifComponent } from './seek-notif.component';

describe('SeekNotifComponent', () => {
  let component: SeekNotifComponent;
  let fixture: ComponentFixture<SeekNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
