export interface PokemonModel {
    id: number;
    name: string;
    type1: string;
    // ? Indica que es opcional puede no existir
    type2?: string;
    sprite: string;
    height: number;
    weight: number;
    abilites: string[];
    hidenAbility:? string;
    stat: IStat[]
}
