import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpIdGetComponent } from './emp-id-get.component';

describe('EmpIdGetComponent', () => {
  let component: EmpIdGetComponent;
  let fixture: ComponentFixture<EmpIdGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpIdGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpIdGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
