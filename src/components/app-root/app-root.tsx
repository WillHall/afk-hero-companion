import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="hero-grid" />
          <ion-route url="/hero/:heroId" component="modify-hero" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
