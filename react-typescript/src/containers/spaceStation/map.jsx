import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Loader from 'react-loader-spinner';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
	createStyles({
		title: {
			width: '200',
			margin: 30,
		},
	})
);

const Map = () => {
	const [mapData, setMapData] = useState('');
	const classes = useStyles();

	useEffect(() => {
		setInterval(() => {
			fetch('http://api.open-notify.org/iss-now.json')
				.then((res) => res.json())
				.then((res) => setMapData((mapData) => res.iss_position));
		}, 3000);
	}, []);

	const containerStyle = {
		width: '600px',
		height: '600px',
	};

	const center = {
		lat: Number(mapData.latitude),
		lng: Number(mapData.longitude),
	};

  return (
    <LoadScript googleMapsApiKey=''>
      <Typography className={classes.title} variant='h4'>
        Where now space station
      </Typography>
      {mapData ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker
            icon={{
              path: 'M 4 8 L 10 1 L 13 0 L 12 3 L 5 9 C 6 10 6 11 6 10 C 7 11 12 3 8 12 A 1.42 1.42 0 0 1 6 13 A 5 5 0 0 0 4 10 Q 3.5 9.9 3.5 10.5 T 0 14 T 1.2 11 T 2.5 9.5 T 3 9 A 5 5 90 0 0 0 7 A 1.42 1.42 0 0 1 1 6 C 1 5 10 1 3 6 C 2 7 3 7 4 8 M 10 1 L 10 3 L 12 3 L 10.2 2.8 L 10 1',
              fillColor: 'yellow',
              fillOpacity: 0.9,
              scale: 2,
              strokeColor: 'white',
              strokeWeight: 2,
            }}
            position={center}
          />
        </GoogleMap>
      ) : (
        <Loader
          type='Grid'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
    </LoadScript>
  );
};

export default Map;
