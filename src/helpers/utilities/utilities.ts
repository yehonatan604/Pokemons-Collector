export function capitalizeFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.substr(1);
}

export function reduceAbilities(abilities: any): string {
  return abilities.reduce((prev: any, curr: any) => {
    return prev + `${capitalizeFirstLetter(curr.ability.name)} | `;
  }, "");
}
