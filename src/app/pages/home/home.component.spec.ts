import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render main headings and CTA', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const h1 = (el.querySelector('h1')?.textContent || '').toLowerCase();
    expect(h1).toContain(component.myInformation.firstName.split(' ')[0].toLowerCase());
    expect(el.querySelector('.display-5')?.textContent).toContain('Crafting Digital');
    expect(el.querySelector('app-cta')).toBeTruthy();
  });
});
