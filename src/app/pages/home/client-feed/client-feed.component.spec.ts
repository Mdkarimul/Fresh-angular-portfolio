import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeedComponent } from './client-feed.component';

describe('ClientFeedComponent', () => {
  let component: ClientFeedComponent;
  let fixture: ComponentFixture<ClientFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
    declarations: [ClientFeedComponent]
=======
    imports: [ClientFeedComponent]
>>>>>>> 39544537facb2c98129f97ba225b9cd092140912
});
    fixture = TestBed.createComponent(ClientFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
