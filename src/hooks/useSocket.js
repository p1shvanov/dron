import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (onData) => {
    const socket = useRef(null);

    useEffect(() => {
        if (!socket.current) {
            socket.current = io('http://localhost:3000');

            socket.current.on('ATTITUDE', (...args) => {
                onData('data', args);
            });
            socket.current.on('TERRAIN_DATA', (...args) => {
                onData('data', args);
            });
            socket.current.on('HEARTBEAT', (...args) => {
                onData('data', args);
            });
            socket.current.on('SYS_STATUS', (...args) => {
                onData('data', args);
            });
            socket.current.on('PARAM_VALUE', (...args) => {
                onData('data', args);
            });
            socket.current.on('EFK_STATUS_REPORT', (...args) => {
                onData('data', args);
            });
            socket.current.on('TERRAIN_REPORT', (...args) => {
                onData('data', args);
            });
            socket.current.on('WIND', (...args) => {
                onData('data', args);
            });
            socket.current.on('AOA_SSA', (...args) => {
                onData('data', args);
            });
            socket.current.on('ESC_TELEMETRY_1_TO_4', (...args) => {
                onData('data', args);
            });
        }
    }, [onData]);
};
