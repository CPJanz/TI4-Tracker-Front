import tiObject from "./tiObject";
const helpers = {
  splitString: unsplitString => {
    return unsplitString.split("|||");
  },

  getObjectiveById: id => getGenericById(id, "objectives"),

  getObjectiveTypeById: id => getGenericById(id, "objective_types"),

  getFactionById: id => getGenericById(id, "factions"),

  getTechById: id => getGenericById(id, "tech"),

  getTechTypeById: id => getGenericById(id, "tech_types"),

  getUnitbyId: id => getGenericById(id, "upgraded_units"),

  getFlagshipById: id => getGenericById(id, "flagships"),

  getAvailablePublicObjectives: current => {
    const currentIds = current.map(objective => objective.id);
    return tiObject.objectives.filter(
      objective =>
        (objective.type === 2 || objective.type === 3) &&
        !currentIds.includes(objective.id)
    );
  },

  getUnclaimedSecretObjectives: players => {
    const allSecretObjectives = tiObject.objectives.filter(
      objective => objective.type === 4 || objective.type === 5
    );
    const claimedSecretObjectives = [];
    players.forEach(player => {
      player.points.forEach(point => {
        const pointType = helpers.getObjectiveById(point.id).type;
        if (
          (pointType === 4 || pointType === 5) &&
          !claimedSecretObjectives.includes(point.id)
        ) {
          claimedSecretObjectives.push(point.id);
        }
      });
    });
    return allSecretObjectives.filter(
      objective => !claimedSecretObjectives.includes(objective.id)
    );
  },

  hasCustodianTokenBeenClaimed: players => {
    const result = players.filter(player =>
      player.points.map(point => point.id).includes(0)
    );
    return result.length > 0;
  },

  getPromissoryByFactionId: factionId =>
    getGenericById(parseInt(factionId), "factions").promissorynote,

  getUnitStatsByObject: unitObject => {
    const potentialStats = ["cost", "combat", "move", "capacity"];
    const stats = [];
    potentialStats.forEach(stat => {
      if (unitObject[stat] !== 0) {
        stats.push({ name: stat, value: unitObject[stat] });
      }
    });
    return stats;
  },

  calculatePoints: function(objectiveArray) {
    return objectiveArray.reduce((total, objective) => {
      return total + this.getObjectiveById(objective.id).pointvalue;
    }, 0);
  },

  getIconsByRequiresString: requiresString => {
    const requiresIcons = [];
    requiresString.split("").forEach(icon => {
      switch (icon) {
        case "Y":
          requiresIcons.push("Cybernetic.png");
          break;
        case "B":
          requiresIcons.push("Propulsion.png");
          break;
        case "R":
          requiresIcons.push("Warfare.png");
          break;
        case "G":
          requiresIcons.push("Biotic.png");
          break;
        case "N":
          break;
        default:
          requiresIcons.push("Placeholder.png");
          break;
      }
    });
    return requiresIcons;
  },
  getStartingTech: factionId => {
    const startingTech = getGenericById(
      parseInt(factionId),
      "factions"
    ).startingtech.toString();
    return startingTech === "-1" ? [] : startingTech.split(",");
  },
  getScoreFromPlayerObj: playerObject => {
    const result = playerObject.points.reduce((accumulator, currentValue) => {
      let result = getGenericById(currentValue.id, "objectives").pointvalue;
      return result + accumulator;
    }, 0);
    return result;
  }
};

const getGenericById = (id, type) => {
  return (
    tiObject[type].find(element => parseInt(element.id) === parseInt(id)) || ""
  );
};

export default helpers;
