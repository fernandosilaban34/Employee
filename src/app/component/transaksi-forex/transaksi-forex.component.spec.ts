import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiForexComponent } from './transaksi-forex.component';

describe('TransaksiForexComponent', () => {
  let component: TransaksiForexComponent;
  let fixture: ComponentFixture<TransaksiForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
