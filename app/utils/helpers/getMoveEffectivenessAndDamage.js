const effectivenessChart = {
  "0": "It has no effect.",
  "0.25": "It's not very effective.",
  "0.5": "It's not very effective.",
  "1": "",
  "2": "It's super effective.",
  "4": "It's super effective."
};

export const getMoveEffectivenessAndDamage = (move, attackedPokemon) => {
  const moveType = move.type;
  const effectiveness = attackedPokemon.type_defenses[moveType];
  const damage = parseInt(move.power * effectiveness);
  return {
    effectiveness: effectivenessChart[effectiveness],
    damage
  };
};
