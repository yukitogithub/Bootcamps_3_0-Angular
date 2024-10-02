import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBootstrapComponent } from './angular-bootstrap.component';

describe('AngularBootstrapComponent', () => {
  let component: AngularBootstrapComponent;
  let fixture: ComponentFixture<AngularBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
