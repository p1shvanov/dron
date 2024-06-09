import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useSocket } from 'hooks/useSocket';
import {
    SET_AOA_SSA,
    SET_ATTITUDE,
    SET_EFK_STATUS_REPORT,
    SET_ESC_TELEMETRY_1_TO_4,
    SET_GLOBAL_POSITION_INT,
    SET_HEARTBEAT,
    SET_PARAM_VALUE,
    SET_SYS_STATUS,
    SET_TERRAIN_DATA,
    SET_TERRAIN_REPORT,
    SET_WIND
} from 'store/actions';

const App = () => {
    const customization = useSelector((state) => state.customization);
    const dispatch = useDispatch();

    const handleData = (messageType, data) => {
        const type = data?.[0]?.mavpackettype;
        if (type) {
            switch (type) {
                case 'ATTITUDE':
                    dispatch({ type: SET_ATTITUDE, payload: data[0] });
                    break;
                case 'TERRAIN_REPORT':
                    dispatch({ type: SET_TERRAIN_REPORT, payload: data[0] });
                    break;
                case 'TERRAIN_DATA':
                    dispatch({ type: SET_TERRAIN_DATA, payload: data[0] });
                    break;
                case 'GLOBAL_POSITION_INT':
                    dispatch({ type: SET_GLOBAL_POSITION_INT, payload: data[0] });
                    break;
                case 'HEARTBEAT':
                    dispatch({ type: SET_HEARTBEAT, payload: data[0] });
                    break;
                case 'SYS_STATUS':
                    dispatch({ type: SET_SYS_STATUS, payload: data[0] });
                    break;
                case 'PARAM_VALUE':
                    dispatch({ type: SET_PARAM_VALUE, payload: data[0] });
                    break;
                case 'EFK_STATUS_REPORT':
                    dispatch({ type: SET_EFK_STATUS_REPORT, payload: data[0] });
                    break;
                case 'WIND':
                    dispatch({ type: SET_WIND, payload: data[0] });
                    break;
                case 'AOA_SSA':
                    dispatch({ type: SET_AOA_SSA, payload: data[0] });
                    break;
                case 'ESC_TELEMETRY_1_TO_4':
                    dispatch({ type: SET_ESC_TELEMETRY_1_TO_4, payload: data[0] });
                    break;
                default:
                    break;
            }
        }
    };

    useSocket(handleData);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <RouterProvider router={router} />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
