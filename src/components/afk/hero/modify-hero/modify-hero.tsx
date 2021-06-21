import { Component, Prop, h } from '@stencil/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.interface';

@Component({
  tag: 'modify-hero',
  styleUrl: 'modify-hero.scss',
  shadow: true,
})
export class ModifyHero {
  @Prop() heroId: string;

  heroes: Hero[];
  hero: Hero;
  activeHeroIndex: number;
  heroStyle: any;
  factionIcon: string;

  async componentWillLoad() {
    this.heroes = await HeroService.getData();
    this.activeHeroIndex = this.heroes.findIndex(el => el.id === this.heroId);
    this.hero = this.heroes[this.activeHeroIndex];
  }

  render() {
    const bokeh = new Array(20);
    const bokehItems = []
    
    for (const [index] of bokeh.entries()) {
      bokehItems.push(<span key={index} />)
    }

    this.heroStyle = {
      'background-image': `url(https://raw.githubusercontent.com/WillHall/afk-hero-metadata/main/icons/${this.hero.faction}/${this.heroId}.jpg)`
    };
  
    this.factionIcon = `https://raw.githubusercontent.com/WillHall/afk-hero-metadata/main/icons/${this.hero.faction}/${this.hero.faction}.png`;

    return (
      <ion-content scrollX={false} scrollY={false} fullscreen={true} class="ion-padding">
        <div class="hero-backdrop working-container" style={{...this.heroStyle}}>
          <div class="bokeh">
            {bokehItems}
          </div>          
          <div class="hero-details"></div>
          <div class="hero-controls">
            <ion-range min={0} max={6} step={1} snaps={true}>
              <ion-label slot="start">Elite</ion-label>
              <ion-label slot="end">Ascended</ion-label>
            </ion-range>

            <ion-range min={20} max={80} step={1} snaps={true}>
              <ion-icon size="small" slot="start" name="sunny"></ion-icon>
              <ion-icon slot="end" name="sunny"></ion-icon>
            </ion-range>
            {/* {<ion-range min={0} max={6} step={0} snaps={true}></ion-range>} */}
          </div>
        </div>
      </ion-content>
    );
  }
}
