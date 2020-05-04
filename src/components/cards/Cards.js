import React from 'react';
import {Card , CardContent , Typography, Grid, StylesProvider} from '@material-ui/core';
import styles from './cards.module.css'
import CountUp from 'react-countup'; 
import cx from 'classnames'; 



const cards = ({data : {confirmed, recovered, deaths, lastUpdate}} )=>{
if(!confirmed){
    return'Loading...'
  }


return(
  <div clssName={styles.container}>
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5"
          >
            <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of cases of covid-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>        
      <CardContent>
        <Typography variant="h5"
          >
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of Recovered from Covid-19</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <CardContent>
        <Typography variant="h5"
          >
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <CountUp
            start={0}
            end={deaths.value}
            duration={2.5}
            separator=","
            />
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of Deaths caused by covid-19</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
)
}

export default cards;
