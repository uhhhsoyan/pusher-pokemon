// Note: having issues with dynamic requires
// Try these:
// https://pokemondb.net/sprites/blastoise
// https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif
// https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif

export const pokemonData = [
  {
    id: 1,
    label: "Pikachu",
    front: require("assets/images/pokemon/pikachu.gif"),
    back: require("assets/images/pokemon/pikachu-back.gif"),
    sprite: require("assets/images/pokemon/pikachu-small.png"),
    cry: require("assets/sounds/cries/pikachu.mp3"),
    moves: [1, 2, 3, 4, 5, 6, 7],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 0.5,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 2,
    label: "Blastoise",
    front: require("assets/images/pokemon/blastoise.gif"),
    back: require("assets/images/pokemon/blastoise-back.gif"),
    sprite: require("assets/images/pokemon/blastoise-small.png"),
    cry: require("assets/sounds/cries/blastoise.mp3"),
    moves: [8, 9, 10, 11, 12, 13],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 2,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 3,
    label: "Ivysaur",
    front: require("assets/images/pokemon/ivysaur.gif"),
    back: require("assets/images/pokemon/ivysaur-back.gif"),
    sprite: require("assets/images/pokemon/ivysaur-small.png"),
    cry: require("assets/sounds/cries/ivysaur.mp3"),
    moves: [14, 15, 16, 17, 18, 19, 20, 21, 22],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 2,
      fighting: 0.5,
      poison: 1,
      ground: 1,
      flying: 2,
      psychic: 2,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 0.5,
    },
  },
  {
    id: 4,
    label: "Dragonite",
    front: require("assets/images/pokemon/dragonite.gif"),
    back: require("assets/images/pokemon/dragonite-back.gif"),
    sprite: require("assets/images/pokemon/dragonite-small.png"),
    cry: require("assets/sounds/cries/dragonite.mp3"),
    moves: [23, 24, 25, 26, 27, 28, 29, 7],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 1,
      grass: 0.25,
      ice: 4,
      fighting: 0.5,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 2,
      dark: 1,
      steel: 1,
      fairy: 2,
    },
  },
  {
    id: 5,
    label: "Golduck",
    front: require("assets/images/pokemon/golduck.gif"),
    back: require("assets/images/pokemon/golduck-back.gif"),
    sprite: require("assets/images/pokemon/golduck-small.png"),
    cry: require("assets/sounds/cries/golduck.mp3"),
    moves: [9, 30, 31, 32, 33, 34],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 2,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 6,
    label: "Golem",
    front: require("assets/images/pokemon/golem.gif"),
    back: require("assets/images/pokemon/golem-back.gif"),
    sprite: require("assets/images/pokemon/golem-small.png"),
    cry: require("assets/sounds/cries/golem.mp3"),
    moves: [29, 35, 36, 37, 38, 39, 40],
    type_defenses: {
      normal: 0.5,
      fire: 0.5,
      water: 4,
      electric: 0,
      grass: 4,
      ice: 2,
      fighting: 2,
      poison: 0.25,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 0.5,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 7,
    label: "Gyarados",
    front: require("assets/images/pokemon/gyarados.gif"),
    back: require("assets/images/pokemon/gyarados-back.gif"),
    sprite: require("assets/images/pokemon/gyarados-small.png"),
    cry: require("assets/sounds/cries/gyarados.mp3"),
    moves: [5, 9, 12, 29, 41, 42, 43],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 4,
      grass: 1,
      ice: 1,
      fighting: 0.5,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 8,
    label: "Houndoom",
    front: require("assets/images/pokemon/houndoom.gif"),
    back: require("assets/images/pokemon/houndoom-back.gif"),
    sprite: require("assets/images/pokemon/houndoom-small.png"),
    cry: require("assets/sounds/cries/houndoom.mp3"),
    moves: [11, 41, 44, 45, 46, 47, 48],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 2,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 0,
      bug: 1,
      rock: 2,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 9,
    label: "Whiscash",
    front: require("assets/images/pokemon/whiscash.gif"),
    back: require("assets/images/pokemon/whiscash-back.gif"),
    sprite: require("assets/images/pokemon/whiscash-small.png"),
    cry: require("assets/sounds/cries/whiscash.mp3"),
    moves: [8, 33, 12, 29, 49, 50, 51],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 1,
      electric: 0,
      grass: 4,
      ice: 1,
      fighting: 1,
      poison: 0.5,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 0.5,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 10,
    label: "Honchkrow",
    front: require("assets/images/pokemon/honchkrow.gif"),
    back: require("assets/images/pokemon/honchkrow-back.gif"),
    sprite: require("assets/images/pokemon/honchkrow-small.png"),
    cry: require("assets/sounds/cries/honchkrow.mp3"),
    moves: [52, 53, 54, 55, 56, 57, 34],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 2,
      grass: 0.5,
      ice: 2,
      fighting: 1,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 0,
      bug: 1,
      rock: 2,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 2,
    },
  },

  {
    id: 11,
    label: "Mismagius",
    front: require("assets/images/pokemon/mismagius.gif"),
    back: require("assets/images/pokemon/mismagius-back.gif"),
    sprite: require("assets/images/pokemon/mismagius-small.png"),
    cry: require("assets/sounds/cries/mismagius.mp3"),
    moves: [21, 52, 58, 59, 34, 54, 55, 59, 60, 61],
    type_defenses: {
      normal: 0,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 0,
      poison: 0.5,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 1,
      ghost: 2,
      dragon: 1,
      dark: 2,
      steel: 1,
      fairy: 1,
    },
  },

  {
    id: 12,
    label: "Abomasnow",
    front: require("assets/images/pokemon/abomasnow.gif"),
    back: require("assets/images/pokemon/abomasnow-back.gif"),
    sprite: require("assets/images/pokemon/abomasnow-small.png"),
    cry: require("assets/sounds/cries/abomasnow.mp3"),
    moves: [61, 62, 14, 18, 64, 10, 16, 65, 19, 66],
    type_defenses: {
      normal: 1,
      fire: 4,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 1,
      fighting: 2,
      poison: 2,
      ground: 0.5,
      flying: 2,
      psychic: 1,
      bug: 2,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 13,
    label: "Zapdos",
    front: require("assets/images/pokemon/zapdos.gif"),
    back: require("assets/images/pokemon/zapdos-back.gif"),
    sprite: require("assets/images/pokemon/zapdos-small.png"),
    cry: require("assets/sounds/cries/zapdos.mp3"),
    moves: [67, 68, 7, 2, 57, 6, 56, 70],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 2,
      fighting: 0.5,
      poison: 1,
      ground: 0,
      flying: 0.5,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 14,
    label: "Lugia",
    front: require("assets/images/pokemon/lugia.gif"),
    back: require("assets/images/pokemon/lugia-back.gif"),
    sprite: require("assets/images/pokemon/lugia-small.png"),
    cry: require("assets/sounds/cries/lugia.mp3"),
    moves: [9, 71, 72, 28, 34, 59, 64, 5, 7, 29, 43, 56],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 2,
      grass: 0.5,
      ice: 2,
      fighting: 0.25,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 0.5,
      bug: 1,
      rock: 2,
      ghost: 2,
      dragon: 1,
      dark: 2,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 15,
    label: "Tyranitar",
    front: require("assets/images/pokemon/tyranitar.gif"),
    back: require("assets/images/pokemon/tyranitar-back.gif"),
    sprite: require("assets/images/pokemon/tyranitar-small.png"),
    cry: require("assets/sounds/cries/tyranitar.mp3"),
    moves: [11, 46, 42, 54, 41, 29, 36, 57, 59, 43, 66],
    type_defenses: {
      normal: 0.5,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 2,
      ice: 1,
      fighting: 4,
      poison: 0.5,
      ground: 2,
      flying: 0.5,
      psychic: 0,
      bug: 2,
      rock: 1,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 2,
      fairy: 2,
    },
  },
  {
    id: 16,
    label: "Scizor",
    front: require("assets/images/pokemon/scizor.gif"),
    back: require("assets/images/pokemon/scizor-back.gif"),
    sprite: require("assets/images/pokemon/scizor-small.png"),
    cry: require("assets/sounds/cries/scizor.mp3"),
    moves: [53, 74, 76, 76, 77, 78, 57, 69],
    type_defenses: {
      normal: 0.5,
      fire: 4,
      water: 1,
      electric: 1,
      grass: 0.25,
      ice: 0.5,
      fighting: 1,
      poison: 0,
      ground: 1,
      flying: 1,
      psychic: 0.5,
      bug: 0.5,
      rock: 1,
      ghost: 1,
      dragon: 0.5,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 17,
    label: "Bayleef",
    front: require("assets/images/pokemon/bayleef.gif"),
    back: require("assets/images/pokemon/bayleef-back.gif"),
    sprite: require("assets/images/pokemon/bayleef-small.png"),
    cry: require("assets/sounds/cries/bayleef.mp3"),
    moves: [14, 21, 37, 79, 17, 60, 18],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 12,
      fighting: 1,
      poison: 2,
      ground: 0.5,
      flying: 2,
      psychic: 1,
      bug: 2,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 18,
    label: "Feraligatr",
    front: require("assets/images/pokemon/feraligatr.gif"),
    back: require("assets/images/pokemon/feraligatr-back.gif"),
    sprite: require("assets/images/pokemon/feraligatr-small.png"),
    cry: require("assets/sounds/cries/feraligatr.mp3"),
    moves: [41, 12, 42, 80, 11, 76, 59],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 2,
      grass: 2,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 19,
    label: "Quilava",
    front: require("assets/images/pokemon/quilava.gif"),
    back: require("assets/images/pokemon/quilava-back.gif"),
    sprite: require("assets/images/pokemon/quilava-small.png"),
    cry: require("assets/sounds/cries/quilava.mp3"),
    moves: [47, 82, 83, 84, 85, 37, 44, 45],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 20,
    label: "Metagross",
    front: require("assets/images/pokemon/metagross.gif"),
    back: require("assets/images/pokemon/metagross-back.gif"),
    sprite: require("assets/images/pokemon/metagross-small.png"),
    cry: require("assets/sounds/cries/metagross.mp3"),
    moves: [31, 39, 86, 74, 75, 33, 29, 59],
    type_defenses: {
      normal: 0.5,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 0,
      ground: 2,
      flying: 0.5,
      psychic: 0.25,
      bug: 1,
      rock: 0.5,
      ghost: 2,
      dragon: 0.5,
      dark: 2,
      steel: 0.5,
      fairy: 0.5,
    },
  },

  {
    id: 21,
    label: "Salamence",
    front: require("assets/images/pokemon/salamence.gif"),
    back: require("assets/images/pokemon/salamence-back.gif"),
    sprite: require("assets/images/pokemon/salamence-small.png"),
    cry: require("assets/sounds/cries/salamence.mp3"),
    moves: [47, 11, 23, 87, 88, 89, 33, 29],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 0.5,
      electric: 1,
      grass: 0.25,
      ice: 4,
      fighting: 0.5,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 2,
      dark: 1,
      steel: 1,
      fairy: 2,
    },
  },
  {
    id: 22,
    label: "Torchic",
    front: require("assets/images/pokemon/torchic.gif"),
    back: require("assets/images/pokemon/torchic-back.gif"),
    sprite: require("assets/images/pokemon/torchic-small.png"),
    cry: require("assets/sounds/cries/torchic.mp3"),
    moves: [32, 47, 76, 90, 91, 60, 83, 67],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 23,
    label: "Swampert",
    front: require("assets/images/pokemon/swampert.gif"),
    back: require("assets/images/pokemon/swampert-back.gif"),
    sprite: require("assets/images/pokemon/swampert-small.png"),
    cry: require("assets/sounds/cries/swampert.mp3"),
    moves: [8, 29, 91, 49, 15, 39, 43, 57, 92, 66, 51],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 1,
      electric: 0,
      grass: 4,
      ice: 1,
      fighting: 1,
      poison: 0.5,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 0.5,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 24,
    label: "Grovyle",
    front: require("assets/images/pokemon/grovyle.gif"),
    back: require("assets/images/pokemon/grovyle-back.gif"),
    sprite: require("assets/images/pokemon/grovyle-small.png"),
    cry: require("assets/sounds/cries/grovyle.mp3"),
    moves: [20, 14, 93, 94, 95, 96, 1, 77, 17],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 2,
      fighting: 1,
      poison: 2,
      ground: 0.5,
      flying: 2,
      psychic: 1,
      bug: 2,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 25,
    label: "Regice",
    front: require("assets/images/pokemon/regice.gif"),
    back: require("assets/images/pokemon/regice-back.gif"),
    sprite: require("assets/images/pokemon/regice-small.png"),
    cry: require("assets/sounds/cries/regice.mp3"),
    moves: [70, 97, 98, 99, 100, 101, 102, 59, 80, 39, 64, 29, 5, 7, 57],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 0.5,
      fighting: 2,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 26,
    label: "Darmanitan",
    front: require("assets/images/pokemon/darmanitan.gif"),
    back: require("assets/images/pokemon/darmanitan-back.gif"),
    sprite: require("assets/images/pokemon/darmanitan-small.png"),
    cry: require("assets/sounds/cries/darmanitan.mp3"),
    moves: [103, 104, 71, 38, 39, 15, 90, 46, 47, 83, 57],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 27,
    label: "Gigalith",
    front: require("assets/images/pokemon/gigalith.gif"),
    back: require("assets/images/pokemon/gigalith-back.gif"),
    sprite: require("assets/images/pokemon/gigalith-small.png"),
    cry: require("assets/sounds/cries/gigalith.mp3"),
    moves: [91, 105, 100, 36, 104, 17, 106, 60, 15],
    type_defenses: {
      normal: 0.5,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 2,
      ice: 1,
      fighting: 2,
      poison: 0.5,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 28,
    label: "Stoutland",
    front: require("assets/images/pokemon/stoutland.gif"),
    back: require("assets/images/pokemon/stoutland-back.gif"),
    sprite: require("assets/images/pokemon/stoutland-small.png"),
    cry: require("assets/sounds/cries/stoutland.mp3"),
    moves: [11, 41, 42, 46, 107, 108, 109, 110, 43, 6, 5],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 2,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 0,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 29,
    label: "Archeops",
    front: require("assets/images/pokemon/archeops.gif"),
    back: require("assets/images/pokemon/archeops-back.gif"),
    sprite: require("assets/images/pokemon/archeops-small.png"),
    cry: require("assets/sounds/cries/archeops.mp3"),
    moves: [1, 25, 56, 102, 91, 89, 41, 29, 59, 66],
    type_defenses: {
      normal: 0.5,
      fire: 0.5,
      water: 2,
      electric: 2,
      grass: 1,
      ice: 2,
      fighting: 1,
      poison: 0.5,
      ground: 0,
      flying: 0.5,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 30,
    label: "Carracosta",
    front: require("assets/images/pokemon/carracosta.gif"),
    back: require("assets/images/pokemon/carracosta-back.gif"),
    sprite: require("assets/images/pokemon/carracosta-small.png"),
    cry: require("assets/sounds/cries/carracosta.mp3"),
    moves: [11, 41, 102, 12, 9, 91, 101, 60, 66, 43],
    type_defenses: {
      normal: 0.5,
      fire: 0.25,
      water: 1,
      electric: 1.5,
      grass: 3,
      ice: 0.5,
      fighting: 1.5,
      poison: 0.5,
      ground: 1.5,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 31,
    label: "Manectric",
    front: require("assets/images/pokemon/manectric.gif"),
    back: require("assets/images/pokemon/manectric-back.gif"),
    sprite: require("assets/images/pokemon/manectric-small.png"),
    cry: require("assets/sounds/cries/manectric.mp3"),
    moves: [11, 41, 46, 107, 2, 5, 7, 59],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 0.5,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 33,
    label: "Slaking",
    front: require("assets/images/pokemon/slaking.gif"),
    back: require("assets/images/pokemon/slaking-back.gif"),
    sprite: require("assets/images/pokemon/slaking-small.png"),
    cry: require("assets/sounds/cries/slaking.mp3"),
    moves: [48, 32, 39, 59, 101, 64, 17, 109, 47, 76],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 0,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 34,
    label: "Mawile",
    front: require("assets/images/pokemon/mawile.gif"),
    back: require("assets/images/pokemon/mawile-back.gif"),
    sprite: require("assets/images/pokemon/mawile-small.png"),
    cry: require("assets/sounds/cries/mawile.mp3"),
    moves: [108, 111, 112, 113, 47, 66, 52, 11, 41, 54],
    type_defenses: {
      normal: 0.5,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 0,
      ground: 2,
      flying: 0.5,
      psychic: 0.5,
      bug: 0.25,
      rock: 0.5,
      ghost: 1,
      dragon: 0,
      dark: 0.5,
      steel: 1,
      fairy: 0.5,
    },
  },
  {
    id: 35,
    label: "Cacturne",
    front: require("assets/images/pokemon/cacturne.gif"),
    back: require("assets/images/pokemon/cacturne-back.gif"),
    sprite: require("assets/images/pokemon/cacturne-small.png"),
    cry: require("assets/sounds/cries/cacturne.mp3"),
    moves: [18, 111, 59, 114, 115, 17, 18, 116, 117, 57, 66],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 0.5,
      electric: 0.5,
      grass: 0.5,
      ice: 2,
      fighting: 2,
      poison: 2,
      ground: 0.5,
      flying: 2,
      psychic: 0,
      bug: 4,
      rock: 1,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 2,
    },
  },
  {
    id: 36,
    label: "Flygon",
    front: require("assets/images/pokemon/flygon.gif"),
    back: require("assets/images/pokemon/flygon-back.gif"),
    sprite: require("assets/images/pokemon/flygon-small.png"),
    cry: require("assets/sounds/cries/flygon.mp3"),
    moves: [88, 89, 48, 118, 47, 56, 91, 119, 69, 120, 23],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 1,
      electric: 0,
      grass: 1,
      ice: 4,
      fighting: 1,
      poison: 0.5,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 0.5,
      ghost: 1,
      dragon: 2,
      dark: 1,
      steel: 1,
      fairy: 2,
    },
  },
  {
    id: 37,
    label: "Staraptor",
    front: require("assets/images/pokemon/staraptor.gif"),
    back: require("assets/images/pokemon/staraptor-back.gif"),
    sprite: require("assets/images/pokemon/staraptor-small.png"),
    cry: require("assets/sounds/cries/staraptor.mp3"),
    moves: [23, 1, 121, 56, 122, 60, 15, 59],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 2,
      grass: 0.5,
      ice: 2,
      fighting: 1,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 0,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 38,
    label: "Luxray",
    front: require("assets/images/pokemon/luxray.gif"),
    back: require("assets/images/pokemon/luxray-back.gif"),
    sprite: require("assets/images/pokemon/luxray-small.png"),
    cry: require("assets/sounds/cries/luxray.mp3"),
    moves: [2, 6, 4, 107, 5, 41, 59, 11],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 0.5,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 39,
    label: "Toxicroak",
    front: require("assets/images/pokemon/toxicroak.gif"),
    back: require("assets/images/pokemon/toxicroak-back.gif"),
    sprite: require("assets/images/pokemon/toxicroak-small.png"),
    cry: require("assets/sounds/cries/toxicroak.mp3"),
    moves: [48, 52, 111, 123, 117, 91, 77, 66],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 1,
      fighting: 0.5,
      poison: 0.5,
      ground: 2,
      flying: 2,
      psychic: 4,
      bug: 0.25,
      rock: 0.5,
      ghost: 1,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 40,
    label: "Weavile",
    front: require("assets/images/pokemon/weavile.gif"),
    back: require("assets/images/pokemon/weavile-back.gif"),
    sprite: require("assets/images/pokemon/weavile-small.png"),
    cry: require("assets/sounds/cries/weavile.mp3"),
    moves: [1, 75, 61, 101, 64, 77, 117, 54, 43, 125, 66],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 0.5,
      fighting: 4,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 0,
      bug: 2,
      rock: 2,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 2,
      fairy: 2,
    },
  },
  {
    id: 41,
    label: "Magnezone",
    front: require("assets/images/pokemon/magnezone.gif"),
    back: require("assets/images/pokemon/magnezone-back.gif"),
    sprite: require("assets/images/pokemon/magnezone-small.png"),
    cry: require("assets/sounds/cries/magnezone.mp3"),
    moves: [70, 3, 5, 2, 106, 60, 100, 7, 6],
    type_defenses: {
      normal: 0.5,
      fire: 2,
      water: 1,
      electric: 0.5,
      grass: 0.5,
      ice: 0.5,
      fighting: 2,
      poison: 0,
      ground: 4,
      flying: 0.25,
      psychic: 0.5,
      bug: 0.5,
      rock: 0.5,
      ghost: 1,
      dragon: 0.5,
      dark: 1,
      steel: 0.25,
      fairy: 0.5,
    },
  },
  {
    id: 42,
    label: "Electivire",
    front: require("assets/images/pokemon/electivire.gif"),
    back: require("assets/images/pokemon/electivire-back.gif"),
    sprite: require("assets/images/pokemon/electivire-small.png"),
    cry: require("assets/sounds/cries/electivire.mp3"),
    moves: [27, 126, 1, 26, 5, 7, 57, 116, 60, 29],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 0.5,
      grass: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 0.5,
      psychic: 1,
      bug: 1,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 43,
    label: "Magmortar",
    front: require("assets/images/pokemon/magmortar.gif"),
    back: require("assets/images/pokemon/magmortar-back.gif"),
    sprite: require("assets/images/pokemon/magmortar-small.png"),
    cry: require("assets/sounds/cries/magmortar.mp3"),
    moves: [83, 47, 84, 59, 26, 17, 34, 116],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 1,
      grass: 0.5,
      ice: 0.5,
      fighting: 1,
      poison: 1,
      ground: 2,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 44,
    label: "Musharna",
    front: require("assets/images/pokemon/musharna.gif"),
    back: require("assets/images/pokemon/musharna-back.gif"),
    sprite: require("assets/images/pokemon/musharna-small.png"),
    cry: require("assets/sounds/cries/musharna.mp3"),
    moves: [127, 128, 59, 109, 99, 120, 33],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 0.5,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 0.5,
      bug: 2,
      rock: 1,
      ghost: 2,
      dragon: 1,
      dark: 2,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 45,
    label: "Krookodile",
    front: require("assets/images/pokemon/krookodile.gif"),
    back: require("assets/images/pokemon/krookodile-back.gif"),
    sprite: require("assets/images/pokemon/krookodile-small.png"),
    cry: require("assets/sounds/cries/krookodile.mp3"),
    moves: [11, 41, 129, 29, 89, 113, 119, 66, 125, 54],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 2,
      electric: 0,
      grass: 2,
      ice: 2,
      fighting: 2,
      poison: 0.5,
      ground: 1,
      flying: 1,
      psychic: 0,
      bug: 2,
      rock: 0.5,
      ghost: 0.5,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 2,
    },
  },
  {
    id: 46,
    label: "Braviary",
    front: require("assets/images/pokemon/braviary.gif"),
    back: require("assets/images/pokemon/braviary-back.gif"),
    sprite: require("assets/images/pokemon/braviary-small.png"),
    cry: require("assets/sounds/cries/braviary.mp3"),
    moves: [80, 23, 122, 25, 56, 76, 59],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 2,
      grass: 0.5,
      ice: 2,
      fighting: 1,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 2,
      ghost: 0,
      dragon: 1,
      dark: 1,
      steel: 1,
      fairy: 1,
    },
  },
  {
    id: 47,
    label: "Talonflame",
    front: require("assets/images/pokemon/talonflame.gif"),
    back: require("assets/images/pokemon/talonflame-back.gif"),
    sprite: require("assets/images/pokemon/talonflame-small.png"),
    cry: require("assets/sounds/cries/talonflame.mp3"),
    moves: [1, 122, 67, 69, 130, 47, 45, 83],
    type_defenses: {
      normal: 1,
      fire: 0.5,
      water: 2,
      electric: 2,
      grass: 0.25,
      ice: 1,
      fighting: 0.5,
      poison: 1,
      ground: 0,
      flying: 1,
      psychic: 1,
      bug: 0.25,
      rock: 4,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 48,
    label: "Volcarona",
    front: require("assets/images/pokemon/volcarona.gif"),
    back: require("assets/images/pokemon/volcarona-back.gif"),
    sprite: require("assets/images/pokemon/volcarona-small.png"),
    cry: require("assets/sounds/cries/volcarona.mp3"),
    moves: [131, 130, 47, 83, 90, 17, 117, 6, 59, 19, 33, 120],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 2,
      electric: 1,
      grass: 0.25,
      ice: 0.5,
      fighting: 0.5,
      poison: 1,
      ground: 1,
      flying: 2,
      psychic: 1,
      bug: 0.5,
      rock: 4,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 49,
    label: "Galvantula",
    front: require("assets/images/pokemon/galvantula.gif"),
    back: require("assets/images/pokemon/galvantula-back.gif"),
    sprite: require("assets/images/pokemon/galvantula-small.png"),
    cry: require("assets/sounds/cries/galvantula.mp3"),
    moves: [18, 2, 111, 132, 120, 5, 7, 117, 6, 77],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 0.5,
      grass: 0.5,
      ice: 1,
      fighting: 0.5,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 2,
      ghost: 1,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1,
    },
  },
  {
    id: 50,
    label: "Heracross",
    front: require("assets/images/pokemon/heracross.gif"),
    back: require("assets/images/pokemon/heracross-back.gif"),
    sprite: require("assets/images/pokemon/heracross-small.png"),
    cry: require("assets/sounds/cries/heracross.mp3"),
    moves: [53, 37, 116, 121, 132, 133, 134, 56, 125, 115, 38],
    type_defenses: {
      normal: 1,
      fire: 2,
      water: 1,
      electric: 1,
      grass: 0.5,
      ice: 1,
      fighting: 0.5,
      poison: 1,
      ground: 0.5,
      flying: 4,
      psychic: 2,
      bug: 0.5,
      rock: 1,
      ghost: 1,
      dragon: 1,
      dark: 0.5,
      steel: 1,
      fairy: 2,
    },
  },
  {
    id: 51,
    label: "Genesect",
    front: require("assets/images/pokemon/genesect.gif"),
    back: require("assets/images/pokemon/genesect-back.gif"),
    sprite: require("assets/images/pokemon/genesect-small.png"),
    cry: require("assets/sounds/cries/genesect.mp3"),
    moves: [135, 136, 137, 120, 77, 59, 138, 85, 34, 35, 101, 54],
    type_defenses: {
      normal: 0.5,
      fire: 4,
      water: 1,
      electric: 1,
      grass: 0.25,
      ice: 0.5,
      fighting: 1,
      poison: 0,
      ground: 1,
      flying: 1,
      psychic: 0.5,
      bug: 0.5,
      rock: 1,
      ghost: 1,
      dragon: 0.5,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
  {
    id: 52,
    label: "Xerneas",
    front: require("assets/images/pokemon/xerneas.gif"),
    back: require("assets/images/pokemon/xerneas-back.gif"),
    sprite: require("assets/images/pokemon/xerneas-small.png"),
    cry: require("assets/sounds/cries/xerneas.mp3"),
    moves: [53, 134, 121, 57, 106, 66, 33, 91, 128, 5, 59, 139],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 0.5,
      poison: 2,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 0.5,
      rock: 1,
      ghost: 1,
      dragon: 0,
      dark: 0.5,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 53,
    label: "Gardevoir",
    front: require("assets/images/pokemon/gardevoir.gif"),
    back: require("assets/images/pokemon/gardevoir-back.gif"),
    sprite: require("assets/images/pokemon/gardevoir-small.png"),
    cry: require("assets/sounds/cries/gardevoir.mp3"),
    moves: [50, 140, 18, 128, 34, 5, 18, 59, 139, 57],
    type_defenses: {
      normal: 1,
      fire: 1,
      water: 1,
      electric: 1,
      grass: 1,
      ice: 1,
      fighting: 0.25,
      poison: 2,
      ground: 1,
      flying: 1,
      psychic: 0.5,
      bug: 1,
      rock: 1,
      ghost: 2,
      dragon: 0,
      dark: 1,
      steel: 2,
      fairy: 1,
    },
  },
  {
    id: 54,
    label: "Escavalier",
    front: require("assets/images/pokemon/escavalier.gif"),
    back: require("assets/images/pokemon/escavalier-back.gif"),
    sprite: require("assets/images/pokemon/escavalier-small.png"),
    cry: require("assets/sounds/cries/escavalier.mp3"),
    moves: [67, 136, 104, 76, 77, 117, 56, 59, 134, 19, 119],
    type_defenses: {
      normal: 0.5,
      fire: 4,
      water: 1,
      electric: 1,
      grass: 0.25,
      ice: 0.5,
      fighting: 1,
      poison: 0,
      ground: 1,
      flying: 1,
      psychic: 0.5,
      bug: 0.5,
      rock: 1,
      ghost: 1,
      dragon: 0.5,
      dark: 1,
      steel: 0.5,
      fairy: 0.5,
    },
  },
]
