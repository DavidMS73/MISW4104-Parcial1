import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantListComponent } from './plant-list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { PlantService } from '../services/plant.service';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantListComponent],
      providers: [
        PlantService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    component.plants = [
      new Plant(
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha()
      ),
      new Plant(
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha()
      ),
      new Plant(
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.string.alpha(),
        faker.number.int(),
        faker.string.alpha(),
        faker.string.alpha()
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component has a table head', () => {
    expect(debug.queryAll(By.css('thead')).length).toBe(1);
  });

  it('Component has a table body', () => {
    expect(debug.queryAll(By.css('tbody')).length).toBe(1);
  });

  it('should have 4 th elements in thead', () => {
    expect(debug.query(By.css('thead tr')).childNodes.length).toBe(4);
  });

  it('should have 3 tr elements in tbody (3 rows)', () => {
    expect(debug.queryAll(By.css('tbody tr')).length).toBe(3);
  });

  it('should have 3 tr elements in tbody', () => {
    expect(
      debug
        .query(By.css('tbody'))
        .childNodes.filter((node) => node.nativeNode.nodeName === 'TR').length
    ).toBe(3);
  });

  it('should have 3 tr elements in tbody', () => {
    expect(
      debug
        .query(By.css('tbody'))
        .childNodes.filter((node) => node.nativeNode.nodeName === 'TR').length
    ).toBe(3);
  });

  it('should have 4 childs in <tbody tr> element', () => {
    expect(debug.query(By.css('tbody tr')).childNodes.length).toBe(4);
  });

  it('should have tow p elements', () => {
    expect(debug.queryAll(By.css('p')).length).toBe(2);
  });
});
