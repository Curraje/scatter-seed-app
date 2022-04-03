import { PlantVarietyModel } from "./PlantVariety";

export class PlantModel {
  private id: number;
  private variety: PlantVarietyModel;
  private notes: string[];
  private totalHarvestWeight: number;

  constructor (id: number, variety: PlantVarietyModel, notes: string[], totalHarvestWeight: number)
  {
    this.id = id;
    this.variety = variety;
    this.notes = notes;
    this.totalHarvestWeight = totalHarvestWeight;
  }

  getTotalHarvestWeight(): string {
    return `You have harvested ${this.totalHarvestWeight} so far this year!`;
  }

  getPlantVarietyDetails(): string {
    return `${this.variety}`;
  }

  getNotes(): string {
    return `${this.notes}`;
  }
}



