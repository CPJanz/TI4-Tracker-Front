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
        default:
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
