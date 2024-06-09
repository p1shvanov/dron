import { useState } from 'react';
// import { useSocket } from '../hooks/useSocket';
import { Chart } from '../../../ui-component/Chart/Chart';
// import { WindDirection } from '../components/WindDirection';

export const GraphPage = () => {
  // const [socketData, setSocketData] = useState([]);

  // const handleData = (messageType, data) => {
  //   setSocketData((prevData) => [...prevData, data[0]]);

  //   if (socketData.length === 1000) {
  //     return;
  //   }
  // };

  // useSocket(handleData);

  return (
    <div>
      grahps
      {/* <Chart socketData={socketData} dataType="ATTITUDE" field="pitch" /> */}
      {/* <Chart socketData={socketData} dataType="ATTITUDE" field="pitch" /> */}
      {/* <Chart socketData={socketData} dataType="VFR_HUD" field="groundspeed" /> */}
      {/* <AddGraphic /> */}
      {/* <WindDirection /> */}
    </div>
  );
};
