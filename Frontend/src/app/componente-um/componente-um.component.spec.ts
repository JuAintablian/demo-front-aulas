import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUmComponent } from './componente-um.component';

describe('ComponenteUmComponent', () => {
  let component: ComponenteUmComponent;
  let fixture: ComponentFixture<ComponenteUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
