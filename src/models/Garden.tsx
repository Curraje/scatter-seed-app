
export class Garden {
  private id: number;
  private gardenYear: number;
  private gardenName: string;
    
  constructor (id: number, gardenYear: number, gardenName: string) {
    this.id = id;
    this.gardenYear = gardenYear;
    this.gardenName = gardenName;
  }

  getName(): string {
    return `${this.gardenYear}: ${this.gardenName}`;
  }

  getGardenCount(): string {
    return `You have created ${this.id} garden(s) with us! Thank you.`;
  }
}