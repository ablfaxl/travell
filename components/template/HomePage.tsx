import { Box } from '@mui/material';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

import TravellCard from '@/components/module/TravellCard';
import {
  ContainerBox,
  CardSection,
  HeaderBox,
  IconContainerLeft,
  IconContainerRight,
  StyledDivder,
} from './HomePageStyle';
import { useState } from 'react';

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <>
      <ContainerBox
        component={'div'}
        onClick={() => {
          setModal(false);
          setModal2(false);
        }}
      >
        <CardSection>
          <HeaderBox component={'div'}>
            <IconContainerLeft component={'div'}>
              <FlightOutlinedIcon
                sx={{ color: 'white', bgcolor: 'transparent' }}
              />
              <h5 style={{ color: '#fff', fontWeight: 'bold' }}>flight</h5>
            </IconContainerLeft>
            <IconContainerRight component={'div'}>
              <MeetingRoomOutlinedIcon
                sx={{ color: '#c6c6c6', bgcolor: 'transparent' }}
              />
              <h5 style={{ color: '#c6c6c6', fontWeight: 'bold' }}>hotel</h5>
            </IconContainerRight>
          </HeaderBox>
          <StyledDivder />
          <Box component={'div'} sx={{ paddingTop: '3rem' }}>
            <TravellCard
              modal={modal}
              setModal={setModal}
              modal2={modal2}
              setModal2={setModal2}
            />
          </Box>
        </CardSection>
      </ContainerBox>
    </>
  );
};

export default HomePage;
