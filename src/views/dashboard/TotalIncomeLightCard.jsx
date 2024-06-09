import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import { useSelector } from 'react-redux';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.info.dark,
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TotalIncomeLightCard = ({ isLoading, value,objType, icon, label }) => {
const dataValue = useSelector((state) => state.dron?.[objType]);

const getLonLatVal  = () =>{
    if(value === 'lon' || value === 'lat'){
        return (dataValue?.at(-1)?.[value]/1e7).toFixed(2);
    }
    else return dataValue?.at(-1)?.[value].toFixed(2);
}
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                                        <Typography variant="subtitle2" sx={{ color: 'white', mt: 0.5 }}>
                                            {label} : {getLonLatVal()}
                                        </Typography>
                                
                            {/* </ListItem> */}
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

TotalIncomeLightCard.propTypes = {
    icon: PropTypes.object,
    label: PropTypes.string,
    total: PropTypes.number,
    isLoading: PropTypes.bool
};

export default TotalIncomeLightCard;
