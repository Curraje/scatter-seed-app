import React from "react";
import BedViewComponent from "../components/BedViewComponent";
import { Bed } from "./Bed";

export class Garden {
  private id: number;
  private gardenHeight: number;
  private gardenWidth: number;
  private gardenYear: number;
  private gardenName: string;
  private beds: Bed[];
    
  constructor (id: number, gardenHeight: number, gardenWidth: number, gardenYear: number, gardenName: string, beds: Bed[]) {
    this.id = id;
    this.gardenHeight = gardenHeight;
    this.gardenWidth = gardenWidth;
    this.gardenYear = gardenYear;
    this.gardenName = gardenName;
    this.beds = beds;
  }

  getName(): string {
    return `${this.gardenYear}: ${this.gardenName}`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  returnBeds(): any {
    return(
      <BedViewComponent
        beds={this.beds}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getGarden(): any {
    return `${this.gardenName}: This garden is from ${this.gardenYear} and is ${this.gardenHeight}x${this.gardenWidth}`;
  }

  //   AddBed(): void {
  //     const perimeter = this.gardenHeight * this.gardenWidth;
  //   }

  //  EditDetails(): void {
  //    
  //  }

  //  ViewNotes(): string {
  //        
  //  }

  //  RemoveBed(): void {
  //    
  //  }

//   getBedCount(): string {
//     return ``;
//   }
}

