import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFirstviewComponent } from './update-firstview.component';

describe('UpdateFirstviewComponent', () => {
  let component: UpdateFirstviewComponent;
  let fixture: ComponentFixture<UpdateFirstviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFirstviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFirstviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
