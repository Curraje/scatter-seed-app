import { gql } from "@apollo/client";

// FIXME: Move Relevant Queries to their own files and add more specific and less general queries

// TODO: change user later
export const CREATE_GARDEN = gql`
  mutation CreateGarden($name: String!, $height: Float!, $width: Float!) {
    createGarden(
      data: {
        name: $name
        height: $height
        width: $width
        user: { connect: { username: "alicethebest" } }
      }
    ) {
      id
      name
      width
      height
      beds {
        id
        coord_x
        coord_y
        name
        height
        width
        notes
        plants {
          plant {
            CommonName
          }
        }
      }
    }
  }
`;

export const UPDATE_BED = gql`
  mutation UpdateBed(
    $id: Int!
    $name: String!
    $x1: Float!
    $y1: Float!
    $x2: Float!
    $y2: Float!
    $plant_id: Int!
  ) {
    updateBed(
      where: { id: $id }
      data: {
        coord_x: $x1
        coord_y: $y1
        name: $name
        width: $x2
        height: $y2
        plants: {
          connectOrCreate: {
            where: { bedId_plantId: { bedId: $id, plantId: $plant_id } }
            create: { plant: { connect: { id: $plant_id } } }
          }
        }
      }
    ) {
      id
      coord_x
      coord_y
      name
      height
      width
      updatedAt
      plants {
        plant {
          id
          CommonName
          BotanicalName
          PlantType
          SunExposure
          SoilpH
          BloomTime
          FlowerColour
          MinIdealTemp
          HardinessZones
          SeedDepth
          SproutsIn
          PlantSpacing
          FrostHardy
          MinFullSun
          RowWidth
          DaystoMaturity
          SowIndoors
          Transplant
          SowOutdoors
        }
      }
    }
  }
`;

export const UPDATE_BED_REPLACE_PLANT = gql`
  mutation UpdateBedReplacePlant(
    $id: Int!
    $name: StringFieldUpdateOperationsInput!
    $x1: FloatFieldUpdateOperationsInput!
    $y1: FloatFieldUpdateOperationsInput!
    $x2: FloatFieldUpdateOperationsInput!
    $y2: FloatFieldUpdateOperationsInput!
    $plant_id: Int!
  ) {
    updateBed(
      where: { id: $id }
      data: {
        coord_x: $x1
        coord_y: $y1
        name: $name
        width: $x2
        height: $y2
        plants: { set: { bedId_plantId: { bedId: $id, plantId: $plant_id } } }
      }
    ) {
      id
      coord_x
      coord_y
      name
      height
      width
      updatedAt
      plants {
        plant {
          id
          CommonName
          BotanicalName
          PlantType
          SunExposure
          SoilpH
          BloomTime
          FlowerColour
          MinIdealTemp
          HardinessZones
          SeedDepth
          SproutsIn
          PlantSpacing
          FrostHardy
          MinFullSun
          RowWidth
          DaystoMaturity
          SowIndoors
          Transplant
          SowOutdoors
        }
      }
    }
  }
`;
