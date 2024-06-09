import { Box, Typography, useTheme } from '@mui/material';
import { useSocket } from 'hooks/useSocket';
import React from 'react';
import { Joystick, JoystickShape } from 'react-joystick-component';

function JoystickComp() {
    const theme = useTheme();

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
