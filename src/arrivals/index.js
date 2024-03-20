import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import moment from 'moment';
import { Box, Stack, Typography } from '@mui/material';
import DeparturePlane from '../assets/plane.png';
import arrivalAirport from '../arrivalFlight.json';

const Arrivals = () => {
  const [flights, setFlights] = useState(arrivalAirport?.flights);

  function generateRandomTime() {
    var currentTime = moment();
    var tenMinutesLater = moment(currentTime).add(10, 'minutes');
    var randomTime = moment(currentTime).add(
      Math.floor(Math.random() * 11),
      'minutes'
    );
    return randomTime.format('HH:mm');
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setFlights(
        flights.map((flight) => {
          const statuses = ['Cancelled', 'On Going', 'Boarding', '- -'];
          const status = statuses[Math.floor(Math.random() * statuses.length)];
          return { ...flight, status };
        })
      );
    }, 2000); // Update status every 2 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, [flights]);
  return (
    <>
      <TableContainer component={Paper} sx={{ border: 'transparent' }}>
        <Table
          sx={{ minWidth: 650, border: 'transparent' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ background: '#1F2748' }}>
              <TableCell colSpan={9}>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  gap={2}
                >
                  <Stack direction={'row'} alignItems={'flex-end'} gap={2}>
                    <Box
                      component={'img'}
                      src={DeparturePlane}
                      sx={{
                        width: '100px',
                        height: '80px',
                        transform: 'scaleX(-1)',
                      }}
                    />
                    <Typography
                      variant="h3"
                      fontWeight={'bold'}
                      sx={{ textTransform: 'uppercase' }}
                    >
                      arrivals
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h3"
                    fontWeight={'bold'}
                    sx={{ letterSpacing: 5 }}
                  >
                    {moment().format('HH:mm')}
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow sx={{ background: '#1F2748' }}>
              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                Time
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                Flight Number
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                Company
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                Destination
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                Airport
              </TableCell>

              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                {' '}
                Terminal
              </TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                {' '}
                Gate
              </TableCell>

              <TableCell
                align="right"
                sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                Remark
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight, index) => (
              <TableRow
                key={flight.flightNumber}
                style={{
                  backgroundColor: index % 2 === 0 ? '#1F2748' : '#348EDD',
                }}
              >
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {generateRandomTime()}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {flight.flight_number}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {flight.airline}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {flight.destination_city}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {flight.originAirport}
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {flight.arrivalTerminal}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  {flight.arrivalGate}
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ fontWeight: 'bold', fontSize: '1.2em' }}
                >
                  <span
                    style={{
                      color: flight.status === 'Cancelled' ? 'red' : '',
                    }}
                  >
                    {flight.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Arrivals;
