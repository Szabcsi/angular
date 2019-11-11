import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditKepernyokComponent } from './audit-kepernyok.component';

describe('AuditKepernyokComponent', () => {
  let component: AuditKepernyokComponent;
  let fixture: ComponentFixture<AuditKepernyokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditKepernyokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditKepernyokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
