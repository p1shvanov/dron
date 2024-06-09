import { Box, Input, Typography, useTheme, Button } from '@mui/material';
import { useSocket } from 'hooks/useSocket';
import React from 'react';
import { Joystick, JoystickShape } from 'react-joystick-component';

function JoystickComp() {
  const theme = useTheme();
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = fetch('http://localhost:3000/stats/mission', {
      method: 'POST', // Укажите метод запроса
      headers: {
        'Content-Type': 'application/json' // Укажите тип данных
      },
      body: JSON.stringify({points: [{ lat: latitude, lon: longitude },{ lat: latitude, lon: longitude }]}) // Отправьте данные в формате JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json(); // Преобразуйте ответ в JSON
      })
      .then((data) => {
        // Обработка ответа сервера
        console.log('Ответ сервера:', data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  };

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
    socket.current.emit('joystickStopDirection', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  const handleStartDirection = (e) => {
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
    socket.current.emit('joystickMoveAltitude', {
      direction: e.direction,
      distance: e.distance,
      type: e.type,
      x: e.x,
      y: e.y
    });
  };

  const handleStopAltitude = (e) => {
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '100px',
          background: theme.palette.background.paper
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              boxShadow: theme.shadows[15],
              padding: '8px',
              borderRadius: '100px'
            }}
          >
            <Joystick start={handleStartDirection} move={handleMoveDirection} stop={handleStopDirection} />
          </Box>
          <Typography sx={{ paddingTop: '20px' }} variant="h5" component="div" gutterBottom>
            Направление
          </Typography>
        </Box>
        <form
          sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center', background: '' }}
          onSubmit={handleSubmit}
        >
          <Input
            sx={{
                padding: '8px',
                borderRadius: '100px'
              }}
            value={latitude}
            placeholder="Write latitude"
            onChange={(e) => setLatitude(e.target.value)}
          />
          <div>
            <Input
              sx={{
                padding: '8px',
                borderRadius: '100px'
              }}
              value={longitude}
              placeholder="Write longitude"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <div>
            <Button type="submit">SEND COORD</Button>
          </div>
        </form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              boxShadow: theme.shadows[15],
              padding: '8px',
              borderRadius: '100px'
            }}
          >
            <Joystick
              controlPlaneShape={JoystickShape.AxisY}
              start={handleStartAltitude}
              throttle={50}
              move={handleMoveAltitude}
              stop={handleStopAltitude}
            />
          </Box>
          <Typography sx={{ paddingTop: '20px' }} variant="h5" component="div" gutterBottom>
            Высота
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default JoystickComp;
