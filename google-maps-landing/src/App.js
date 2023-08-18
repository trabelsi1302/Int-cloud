// src/App.js
import React, { useRef, useEffect } from 'react';

function App() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // Coordonnées de San Francisco
      zoom: 12,
    };

    new window.google.maps.Map(mapContainerRef.current, mapOptions);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div ref={mapContainerRef} style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
}

export default App;

