import tiObject from "./tiObject";
const helpers = {
  splitString: unsplitString => {
    return unsplitString.split("|||");
  },

  getObjectiveById: id => getGenericById(id, "objectives"),

  getFactionById: id => getGenericById(id, "factions"),

  getTechById: id => getGenericById(id, "tech"),

  getTechTypeById: id => getGenericById(id, "tech_types"),

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
    // console.log(getGenericById(factionId, "factions").startingtech);
    return getGenericById(parseInt(factionId), "factions")
      .startingtech.toString()
      .split(",");
  }
};

const getGenericById = (id, type) =>
  tiObject[type].find(element => parseInt(element.id) === parseInt(id));

export default helpers;
