import { Component, h } from '@stencil/core';
// import { HeroDecoratedTile } from '../hero-decorated-tile/hero-decorated-tile';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.interface';

@Component({
  tag: 'hero-grid',
  styleUrl: 'hero-grid.css',
  shadow: true,
})
export class HeroGrid {
  heroes: Hero[] = [];

  async componentWillLoad() {
    this.heroes = await HeroService.getData();
  }

  render() {
    const heroMarkup = [];

    for (var i=0; i<this.heroes.length; i++) {
      const hero = this.heroes[i];

      heroMarkup.push(<hero-decorated-tile
        heroId={hero.id}
        ascension={hero.ascension}
        owned={hero.owned}
        name={hero.name}
        heroTitle={hero.title}
        si={hero.si}
        fi={hero.fi}
        faction={hero.faction}
      ></hero-decorated-tile>)
    }

    console.log(heroMarkup);

    return (
      <ion-content class="ion-padding" color="dark">
        <div class="heroes working-container">
          {heroMarkup}
        </div>
      </ion-content>
    );
  }

}
