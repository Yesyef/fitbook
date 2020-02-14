import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsStartPageComponent } from './posts-start-page.component';

describe('PostsStartPageComponent', () => {
  let component: PostsStartPageComponent;
  let fixture: ComponentFixture<PostsStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
