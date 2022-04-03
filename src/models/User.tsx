import React from "react";
import ReturnGardenFunctionComponent from "../components/ReturnGardenFunctionComponent";
import { Garden } from "./Garden";


export class User {
  private id: number;
  private name: string;
  private location: string;
  private email: string;
  private firstFrost: string;
  private lastFrost: string;
  private gardens: Garden[];
      
  constructor (id: number,name: string,location: string,email: string,firstFrost: string, lastFrost: string, gardens: Garden[]) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.email = email;
    this.firstFrost = firstFrost;
    this.lastFrost = lastFrost;
    this.gardens = gardens;
  }
  
  getName(): string {
    return `${this.name}`;
  }
  
  getFrostDates(): string {
    return `First Frost is: ${this.firstFrost} | Last Frost is: ${this.lastFrost}`;
  }

  getLocation(): string {
    return `Your current location is: ${this.location}`;
  }

  getNumberOfGardens(): string {
    return `You have ${this.gardens.length} with us`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  returnGardens(): any {
    return(
      <ReturnGardenFunctionComponent
        gardens={this.gardens}
      />
    );
  }

  addGarden(): string {
    this.gardens[(this.gardens.length + 1), 2023, "Newest garden"];

    return `New Garden Added ${this.gardens[this.gardens.length - 1].getName()}`;
  }
}