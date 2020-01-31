import tiObject from "./tiObject";
const helpers = {
  splitString: unsplitString => {
    return unsplitString.split("///");
  },

  getObjectiveById: id => getGenericById(id, "objectives"),

  getFactionById: id => getGenericById(id, "factions"),

  getTechById: id => getGenericById(id, "tech"),

  getTechTypeById: id => getGenericById(id, "tech_types"),

  calculatePoints: function(objectiveArray) {
    return objectiveArray.reduce((total, objective) => {
      return total + this.getObjectiveById(objective.id).pointvalue;
    }, 0);
  }
};

const getGenericById = (id, type) =>
  tiObject[type].find(element => element.id === id);

export default helpers;
