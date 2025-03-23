import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentchatComponent } from './currentchat.component';

describe('CurrentchatComponent', () => {
  let component: CurrentchatComponent;
  let fixture: ComponentFixture<CurrentchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentchatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
