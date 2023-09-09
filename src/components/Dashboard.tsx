// Dashboard.tsx

import React from 'react';
import { useWorldwideData, useCountryData, useGraphData } from './query';
import LineChart from './LineChart';
import Mapify from './Mapify';

// Assuming the structure of your CountryData
// interface CountryData {
//     country: string;
//     cases: number;
//     deaths: number;
//     recovered: number;
    // Add other properties as needed
//   }
  
  // Rest of your code
  

const Dashboard: React.FC = () => {
  const worldwideDataQuery = useWorldwideData();
  const countryDataQuery = useCountryData();
  const graphDataQuery = useGraphData();

  if (worldwideDataQuery.isLoading || countryDataQuery.isLoading || graphDataQuery.isLoading) {
    return <div>Loading...</div>;
  }

//   console.log('worldwideDataQuery',worldwideDataQuery)
//   console.log('countryDataQuery',countryDataQuery)
//   console.log('graphDataQuery ',graphDataQuery )



  return (
    <div>
      <h1>COVID-19 Dashboard</h1>
      <LineChart data={graphDataQuery.data} />
      <Mapify countryData={countryDataQuery.data} />
    </div>
  );
};

export default Dashboard;
