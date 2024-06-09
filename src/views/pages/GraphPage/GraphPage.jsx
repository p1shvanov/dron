import { useState } from 'react';
// import { useSocket } from '../hooks/useSocket';
import { Chart } from '../../../ui-component/Chart/Chart';
import { useSelector } from 'react-redux';
// import { WindDirection } from '../components/WindDirection';

export const GraphPage = () => {
const socketDataATTITUDE  = useSelector((state) => state.dron['ATTITUDE'])
const socketDataVFR_HUD  = useSelector((state) =>  state.dron['VFR_HUD'])
const socketDataSCALED_PRESSURE  = useSelector((state) =>  state.dron['SCALED_PRESSURE'])
console.log(socketDataSCALED_PRESSURE,'socketDataSCALED_PRESSURE')
  return (
    <div>
      <Chart socketData={socketDataATTITUDE} dataType="ATTITUDE" field="pitch" />
      <Chart socketData={socketDataSCALED_PRESSURE} dataType="SCALED_PRESSURE" field="temperature" />
      <Chart socketData={socketDataSCALED_PRESSURE} dataType="SCALED_PRESSURE" field="press_abs" />
      <Chart socketData={socketDataSCALED_PRESSURE} dataType="LOCAL_POSITION_NED" field="x" field2='y' field3='z' />
      {/* <Chart socketData={socketDataVFR_HUD} dataType="VFR_HUD" field="groundspeed" /> */}
      {/* <AddGraphic /> */}
      {/* <WindDirection /> */}
    </div>
  );
};
