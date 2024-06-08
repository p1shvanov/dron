import { Box, Typography } from '@mui/material';
import { useSocket } from 'hooks/useSocket';
import React from 'react';
import { Joystick, JoystickShape } from 'react-joystick-component';

function JoystickComp() {
  const socket = useSocket();
  const handleMoveDirection = (e) => {
    console.log('MoveDirection:', e);
    socket.current.emit('joystickMoveDirection', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  const handleStopDirection = (e) => {
    console.log('StopDirection:', e);
    socket.current.emit('joystickStopDirection', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  const handleStartDirection = (e) => {
    console.log('StartDirection:', e);
    socket.current.emit('joystickStartDirection', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };
  const handleStartAltitude = (e) => {
    console.log('StartAltitude:', e);
    socket.current.emit('joystickStartAltitude', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  const handleMoveAltitude = (e) => {
    console.log('MoveAltitude:', e);
    socket.current.emit('joystickMoveAltitude', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  const handleStopAltitude = (e) => {
    console.log('StopAltitude:', e);
    socket.current.emit('joystickStopAltitude', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', marginTop: '20px' }}>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Joystick start={handleStartDirection} move={handleMoveDirection} stop={handleStopDirection} />
          <Typography sx={{marginTop: '20px'}} variant="h4" component="div" gutterBottom>
          Направление
        </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Joystick
            controlPlaneShape={JoystickShape.AxisY}
            start={handleStartAltitude}
            throttle={50}
            move={handleMoveAltitude}
            stop={handleStopAltitude}
          />
          <Typography sx={{marginTop: '20px'}} variant="h4" component="div" gutterBottom>
          Высота
        </Typography>
        </Box>
      </Box>
    </>
  );
}

export default JoystickComp;
