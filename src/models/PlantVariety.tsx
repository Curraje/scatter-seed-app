
export class PlantVarietyModel {
  private commonName: string;
  private botanicalName: string;
  private plantType: string;
  private sunExposure: string;
  private soilpH: string;
  private bloomTime: string;
  private flowerColour: string;
  private hardinessZones: string;
  private seedDepth: string;
  private sproutsIn: string;
  private idealTemp: string;
  private plantingSpacing: string;
  private frostHardy: string;
  private minFullSun: string;
  private rowWidth: string;
  private daysToMaturity: string;
  private sowIndoors: string;
  private transplant: string;
  private sowOutdoors: string;

  constructor (commonName: string, botanicalName: string, plantType: string, sunExposure: string, soilpH: string, bloomTime: string, flowerColour: string, hardinessZones: string, seedDepth: string, sproutsIn: string, idealTemp: string, plantSpacing: string, frostHardy: string, minFullSun: string, rowWidth: string, daysToMaturity: string, sowIndoors: string, transplant: string, sowOutdoors: string)
  {
    this.commonName = commonName;
    this.botanicalName = botanicalName;
    this.plantType = plantType;
    this.sunExposure = sunExposure;
    this.soilpH = soilpH;
    this.bloomTime = bloomTime;
    this.flowerColour = flowerColour;
    this.hardinessZones = hardinessZones;
    this.seedDepth = seedDepth;
    this.sproutsIn = sproutsIn;
    this.idealTemp = idealTemp;
    this.plantingSpacing = plantSpacing;
    this.frostHardy = frostHardy;
    this.minFullSun = minFullSun;
    this.rowWidth = rowWidth;
    this.daysToMaturity = daysToMaturity;
    this.sowIndoors = sowIndoors;
    this.transplant = transplant;
    this.sowOutdoors = sowOutdoors;
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getNameDetails(): any {
    const nameDetails = {
      "common": this.commonName, 
      "botanical": this.botanicalName, 
      "type": this.plantType
    };
    return nameDetails;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSowingDetails(): any {
    const sowingDetails = {
      "sun": this.sunExposure, 
      "pH": this.soilpH, 
      "blooms": `Blooms in ${this.bloomTime}, and is ${this.flowerColour}`,
      "hardiness": this.hardinessZones,
      "depth": this.seedDepth,
      "sprouts": this.sproutsIn,
      "temp": this.idealTemp,
      "sbFrost": `Sow ~${this.sowIndoors} before last Frost date`,
      "saFrost": `Sow ~${this.sowOutdoors} after last Frost date`,  
    };

    return sowingDetails;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPlantingDetails(): any {
    const plantingDetails = {
      "sprouts": this.sproutsIn,
      "temp": this.idealTemp,
      "spacing": this.plantingSpacing,
      "frostHardy": this.frostHardy,
      "minSun": this.minFullSun,
      "rows": this.rowWidth,
      "maturity": this.daysToMaturity,
      "sbFrost": `Sow ~${this.sowIndoors} before last Frost date.`,
      "transplant": `Transplant ~${this.transplant} after sowing indoors.`,
      "saFrost": `Sow ~${this.sowOutdoors} after last Frost date.`,
    };
    return plantingDetails;
  }
}