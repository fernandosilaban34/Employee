import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForexComponent } from './list-forex.component';

describe('ListForexComponent', () => {
  let component: ListForexComponent;
  let fixture: ComponentFixture<ListForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
