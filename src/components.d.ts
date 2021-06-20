/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface HeroDecoratedTile {
        "ascension": number;
        "faction": string;
        "fi": number;
        "heroId": string;
        "heroTitle": string;
        "name": string;
        "owned": boolean;
        "si": number;
        "stars": number;
    }
    interface HeroGrid {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHeroDecoratedTileElement extends Components.HeroDecoratedTile, HTMLStencilElement {
    }
    var HTMLHeroDecoratedTileElement: {
        prototype: HTMLHeroDecoratedTileElement;
        new (): HTMLHeroDecoratedTileElement;
    };
    interface HTMLHeroGridElement extends Components.HeroGrid, HTMLStencilElement {
    }
    var HTMLHeroGridElement: {
        prototype: HTMLHeroGridElement;
        new (): HTMLHeroGridElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "hero-decorated-tile": HTMLHeroDecoratedTileElement;
        "hero-grid": HTMLHeroGridElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface HeroDecoratedTile {
        "ascension"?: number;
        "faction"?: string;
        "fi"?: number;
        "heroId"?: string;
        "heroTitle"?: string;
        "name"?: string;
        "owned"?: boolean;
        "si"?: number;
        "stars"?: number;
    }
    interface HeroGrid {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "hero-decorated-tile": HeroDecoratedTile;
        "hero-grid": HeroGrid;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "hero-decorated-tile": LocalJSX.HeroDecoratedTile & JSXBase.HTMLAttributes<HTMLHeroDecoratedTileElement>;
            "hero-grid": LocalJSX.HeroGrid & JSXBase.HTMLAttributes<HTMLHeroGridElement>;
        }
    }
}
