import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRecentComponent } from './contact-recent.component';

describe('ContactRecentComponent', () => {
  let component: ContactRecentComponent;
  let fixture: ComponentFixture<ContactRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
