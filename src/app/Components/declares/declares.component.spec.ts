import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaresComponent } from './declares.component';

describe('DeclaresComponent', () => {
  let component: DeclaresComponent;
  let fixture: ComponentFixture<DeclaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
