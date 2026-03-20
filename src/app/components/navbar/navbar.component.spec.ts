import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navLinks and app names', () => {
    expect(component.navLinks.length).toBeGreaterThan(0);
    expect(component.appName1).toBeTruthy();
    expect(component.appName2).toBeTruthy();
  });

  it('should update isScrolled when window scrolls', () => {
    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true });
    component.onWindowScroll();
    expect(component.isScrolled()).toBeTrue();

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    component.onWindowScroll();
    expect(component.isScrolled()).toBeFalse();
  });
});
