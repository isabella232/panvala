import React from 'react';
import Box from '../components/system/Box';
import Nav from '../components/Nav';

export default function FundraiserHeader() {
  return (
    <Box className="bg-gradient bottom-clip-up relative z-5" height="300px">
      <Nav />
      <Box textAlign="center" color="white" bold fontSize={4} mt={4}>
        Panvala Fundraiser
      </Box>
    </Box>
  );
}
