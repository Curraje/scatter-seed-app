export class Bed {
  private id: number;
  private bedHeight: number;
  private bedWidth: number;
  private bedName: string;
  //private plants: Plant[];
      
  constructor (id: number, bedHeight: number, bedWidth: number, bedName: string) {
    this.id = id;
    this.bedHeight = bedHeight;
    this.bedWidth = bedWidth;
    this.bedName = bedName;
  }
  
  getBed(): string {
    return `${this.bedName}: This bed is ${this.bedHeight}x${this.bedWidth}`;
  }
  
  //   getGardenCount(): string {
  //     return `You have created ${this.id} garden(s) with us! Thank you.`;
  //   }
}