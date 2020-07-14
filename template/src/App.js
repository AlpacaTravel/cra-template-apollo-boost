// src/App.js
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const PLACE = gql`
  query getPlace($placeId: ID!) {
    place(id: $placeId) {
      name
      contact {
        facebookUrl
      }
      address {
        locality
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(PLACE, {
    variables: { placeId: "place/facebook:place:370266736485353" },
  });

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p>Error :(, did you update your .env with your API Key?</p>;

  return (
    <div>
      <h2>
        When in Melbourne, go for a coffee at{` `}
        <a href={data.place.contact.facebookUrl}>{data.place.name}</a> in{` `}
        {data.place.address.locality} 🦙☕ 🚀
      </h2>
    </div>
  );
}

export default App;
