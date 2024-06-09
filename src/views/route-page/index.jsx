// material-ui
import { Box } from '@mui/material';
import { YMaps, Map, Placemark, GeoObject, FullscreenControl, GeolocationControl, TypeSelector, ZoomControl } from '@pbe/react-yandex-maps';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MAP_COORDINATES, SET_MAP_STATE } from 'store/actions';
import JoystickComp from '../Controller/Controller';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { getCoordinates } from 'utils/getCoordinates';
import TotalGrowthBarChart from 'views/dashboard/TotalGrowthBarChart';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import TotalIncomeDarkCard from 'views/dashboard/TotalIncomeDarkCard';
import TotalIncomeLightCard from 'views/dashboard/TotalIncomeLightCard';

// ==============================|| Route PAGE ||============================== //

const RoutePage = () => {
    const [mapConstructor, setMapConstructor] = useState(null);
    const dispatch = useDispatch();
    const coordinates = useSelector((state) => state.map.coordinates);
    console.log(coordinates, 'coordinates');
    const mapOptions = useSelector((state) => state.map.mapOptions);
    const geolocationOptions = useSelector((state) => state.map.geolocationOptions);
    const state = useSelector((state) => state.map.state);

    const mapRef = useRef(null);

    const dronePosition = useSelector((state) => state.dron.GLOBAL_POSITION_INT);

    console.log(dronePosition, 'dronePosition');

    useEffect(() => {
        if (dronePosition && dronePosition.length) {
            dronePosition.forEach((item) => {
                if (item?.lon && item?.lat) {
                    const coordinatesItem = getCoordinates(item.lat, item.lon);
                    if (!coordinates.some((coord) => coord[0] === coordinatesItem[0] && coord[1] === coordinatesItem[1])) {
                        dispatch({ type: SET_MAP_COORDINATES, payload: coordinatesItem });
                    }
                }
            });
        }
    }, [dronePosition]);

    useEffect(() => {
        if (coordinates.length) dispatch({ type: SET_MAP_STATE, payload: { center: coordinates[coordinates.length - 1] } });
    }, [coordinates]);

    const handleBoundsChange = () => {
        const newCoords = mapRef.current.getCenter();
        mapConstructor.geocode(newCoords).then((res) => {
            const nearest = res.geoObjects.get(0);
            const foundAddress = nearest.properties.get('text');
            const [centerX, centerY] = nearest.geometry.getCoordinates();
            const [initialCenterX, initialCenterY] = center;
            if (centerX !== initialCenterX && centerY !== initialCenterY) {
                dispatch({ type: SET_MAP_STATE, state: { payload: { title: foundAddress } } });
            }
        });
    };

    return (
        <MainCard title="Маршрут">
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                    <TotalIncomeDarkCard />
                    <TotalIncomeLightCard />
                    <TotalIncomeDarkCard />
                    <TotalIncomeLightCard />
                    <TotalIncomeDarkCard />
                    <TotalIncomeLightCard />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                    <YMaps query={{ apikey: '29294198-6cdc-4996-a870-01e89b830f3e', lang: 'ru-ru' }}>
                        <Map
                            {...mapOptions}
                            state={state}
                            onLoad={setMapConstructor}
                            onBoundsChange={handleBoundsChange}
                            instanceRef={mapRef}
                        >
                            <FullscreenControl />
                            <Placemark color="primary" />
                            <GeolocationControl {...geolocationOptions} />
                            <TypeSelector options={{ float: 'right' }} />
                            <ZoomControl options={{ float: 'right' }} />
                            <GeoObject
                                geometry={{
                                    type: 'LineString',
                                    coordinates
                                }}
                                options={{
                                    geodesic: true,
                                    strokeWidth: 5,
                                    strokeColor: '#F008'
                                }}
                            />
                        </Map>
                    </YMaps>
                    <JoystickComp />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
                    <TotalIncomeDarkCard />
                    <TotalIncomeLightCard />
                    <TotalIncomeDarkCard />
                    <TotalIncomeLightCard />
                    <TotalIncomeDarkCard />
                    <TotalIncomeLightCard />
                </Box>
            </Box>
        </MainCard>
    );
};

export default RoutePage;
