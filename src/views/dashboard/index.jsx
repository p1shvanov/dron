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
              field="battery_remaining"
              graphTitle="Battety %"
              graphYMax={100}
              graphYMin={0}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="SYS_STATUS"
              field="current_battery"
              graphTitle="mv"
              graphYMax={2830}
              graphYMin={2780}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="ATTITUDE"
              field="pitch"
              graphTitle="pitch"
              graphYMax={1}
              graphYMin={0}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="ATTITUDE"
              field="pitchspeed"
              graphTitle="pitchspeed"
              graphYMax={1}
              graphYMin={0}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="TERRAIN_REPORT"
              field="current_height"
              graphTitle="current_height"
              graphYMax={300}
              graphYMin={0}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard
              isLoading={isLoading}
              dataFilterParam="TERRAIN_REPORT"
              field="terrain_height"
              graphTitle="terrain_height"
              graphYMax={600}
              graphYMin={520}
            />
          </Grid>
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
