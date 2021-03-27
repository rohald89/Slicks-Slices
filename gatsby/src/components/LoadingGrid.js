import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles>
          <p>
            <span className="mark">Loading...</span>
          </p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcaQ8AAXcA2h1GFzIAAAAASUVORK5CYII="
            className="loading"
            alt="Loading"
            width="500px"
            height="400px"
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
