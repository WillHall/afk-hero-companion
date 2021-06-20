import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hero-decorated-tile',
  styleUrl: 'hero-decorated-tile.css',
  shadow: true,
})
export class HeroDecoratedTile {

  @Prop() heroId: string;
  @Prop() ascension: number;
  @Prop() owned: boolean;
  @Prop() stars: number;
  @Prop() name: string;
  @Prop() heroTitle: string;
  @Prop() si: number;
  @Prop() fi: number;
  @Prop() faction: string;

  classList: string;
  factionIcon: string;
  heroStyle: {};

  render() {
    this.classList = Object.values(Object.fromEntries(Object.entries({
      hero: 'hero',
      owned: this.owned ? 'owned' : false,
      stars: this.ascension >= 6 && this.stars ? `stars-${this.stars}` : false,
      ascension: `asc-${this.ascension}`
    }).filter(([key, value]) => !key.startsWith('_') && value !== false) )).join(' ');

    this.heroStyle = {
      'background-image': `url(https://raw.githubusercontent.com/WillHall/afk-hero-metadata/main/icons/${this.faction}/${this.heroId}.jpg)`
    };

    this.factionIcon = `https://raw.githubusercontent.com/WillHall/afk-hero-metadata/main/icons/${this.faction}/${this.faction}.png`;

    return (
      <div id={this.heroId} class={this.classList} title={this.name + ' - ' + this.heroTitle}>
        <div class="hero-thumb" style={{...this.heroStyle}}>
          {(() => {
            if (this.ascension >= 6 && this.stars) {
              return (<div class={'stars stars-' + this.stars}></div>)
            }
          })()}
        </div>
        <div class="flair">
          <div class={'si si-' + this.si}></div>
          <div class={'fi fi-' + this.fi}></div>  
          <div class={'faction ' + this.faction}>
            <img src={this.factionIcon}/>
          </div>
        </div>      
      </div>
    );
  }

}
