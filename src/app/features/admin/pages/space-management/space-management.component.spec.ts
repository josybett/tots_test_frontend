import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceManagementComponent } from './space-management.component';

describe('SpaceManagementComponent', () => {
  let component: SpaceManagementComponent;
  let fixture: ComponentFixture<SpaceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceManagementComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
