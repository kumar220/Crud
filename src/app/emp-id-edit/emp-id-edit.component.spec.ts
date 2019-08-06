import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpIdEditComponent } from './emp-id-edit.component';

describe('EmpIdEditComponent', () => {
  let component: EmpIdEditComponent;
  let fixture: ComponentFixture<EmpIdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpIdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpIdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
