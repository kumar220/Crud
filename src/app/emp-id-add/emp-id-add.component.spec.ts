import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpIdAddComponent } from './emp-id-add.component';

describe('EmpIdAddComponent', () => {
  let component: EmpIdAddComponent;
  let fixture: ComponentFixture<EmpIdAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpIdAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpIdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
