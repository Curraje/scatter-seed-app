import { gql } from "@apollo/client";

//maybe change user later
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
