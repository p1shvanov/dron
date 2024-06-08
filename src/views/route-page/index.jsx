// material-ui
import { YMaps, Map, Placemark, GeoObject, FullscreenControl, GeolocationControl, TypeSelector, ZoomControl } from '@pbe/react-yandex-maps';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MAP_COORDINATES, SET_MAP_STATE } from 'store/actions';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { getCoordinates } from 'utils/getCoordinates';

// ==============================|| Route PAGE ||============================== //

const RoutePage = () => {
    const [mapConstructor, setMapConstructor] = useState(null);
    const dispatch = useDispatch();
    const coordinates = useSelector((state) => state.map.coordinates);
    const mapOptions = useSelector((state) => state.map.mapOptions);
    const geolocationOptions = useSelector((state) => state.map.geolocationOptions);
    const state = useSelector((state) => state.map.state);

    const mapRef = useRef(null);

    const dronePosition = useSelector((state) => state.dron.GLOBAL_POSITION_INT);

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

    const handleBoundsChange = (e) => {
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
            <YMaps query={{ apikey: '29294198-6cdc-4996-a870-01e89b830f3e', lang: 'ru-ru' }}>
                <Map
                    {...mapOptions}
                    state={state}
                    onLoad={setMapConstructor}
                    onBoundsChange={handleBoundsChange}
                    instanceRef={mapRef}
                    width={'100%'}
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
        </MainCard>
    );
};

export default RoutePage;
