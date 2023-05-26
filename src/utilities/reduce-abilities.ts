import { capitalizeFirstLetter } from "./capitalize-first-letter";

export function reduceAbilities (abilities: any) : string {
    return abilities.reduce(
        (prev: any, curr: any) => {
          return prev + `${capitalizeFirstLetter(curr.ability.name)} | `;
        }, "");
}