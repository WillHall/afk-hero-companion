import { Hero } from "./hero.interface";

class HeroServiceController {
  public heroes: Hero[];

  constructor() {}

  async load(lang="en") {
    if (this.heroes) {
      return this.heroes;
    } else {
      const host = `https://raw.githubusercontent.com/WillHall/afk-hero-metadata/main/metadata/${lang}/heroes.json`;
      const ret: any = await fetch(host);
      const json = await ret.json();
      this.heroes = json.heroes;
  
      this.heroes[0] = {
        ascension: 13,
        minAscension: 2,
        maxAscension: 13,
        class: "ranger",
        faction: "faction_cel",
        fi: 9,
        id: "cel_athalia",
        name: "Athalia",
        owned: false,
        role: "assassin",
        si: 30,
        maxSi: 40,
        title: "Harbinger of Justice",
        type: "agility"
      };

      return this.heroes;
    }
  }

  async getData() {
    const data = await this.load();
    return data;
  }

  addData(data) {
    this.heroes.push(data);
  }

}

export const HeroService = new HeroServiceController();