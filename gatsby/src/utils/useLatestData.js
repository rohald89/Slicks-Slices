import { useEffect, useState } from 'react';

// fake out VS code to get syntax highlighting on the query without importing GraphQL library
// const gql = String.raw;
const deets = `
name
            _id
            image {
              asset {
                url
                metadata {
                  lqip
                }
              }
            }
`;

export default function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // use a side effect to fetch the data from the graphql end point
  useEffect(function () {
    // when component loads, load the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    }).then((res) =>
      res.json().then((res) => {
        // TODO: check for errors
        // set the data to state
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
    );
  }, []);
  return { hotSlices, slicemasters };
}
