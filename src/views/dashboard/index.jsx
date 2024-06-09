import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { useSelector } from 'react-redux';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const droneData = useSelector((state) => state.dron);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* <Grid item lg={4} md={6} sm={6} xs={12}> */}
          {/* <EarningCard isLoading={isLoading} /> */}
          {/* </Grid> */}
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="SYS_STATUS"
              firstField="current_battery"
              secondField="battery_remaining"
              firstGraphTitle="Battety%"
              secondGraphTitle="milliVolts"
              firstGraphY={100}
              firstGraphY2={0}
              secondGraphY={4000}
              secondGraphY2={2000}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="ATTITUDE"
              firstField="pitch"
              secondField="pitchspeed"
              firstGraphTitle="pitch"
              secondGraphTitle="pitchspeed"
              firstGraphY2={0}
              firstGraphY={360 / 2}
              secondGraphY={2816}
              secondGraphY2={2000}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="TERRAIN_REPORT"
              firstField="current_height"
              secondField="terrain_height"
              firstGraphTitle="current_height"
              secondGraphTitle="terrain_height"
              firstGraphY2={0}
              firstGraphY={360}
              secondGraphY={0}
              secondGraphY2={1000}
            />
          </Grid>
          {/* <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard
                                    {...{
                                        isLoading: isLoading,
                                        total: 203,
                                        label: 'Total Income',
                                        icon: <StorefrontTwoToneIcon fontSize="inherit" />
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* <Grid item xs={12} md={8}> */}
          {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          {/* </Grid> */}
          {/* <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
