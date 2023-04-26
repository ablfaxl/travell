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
import Modal from '../module/Modal';

const HomePage = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <ContainerBox onClick={() => {setModal(false)}}>
        <CardSection>
          <HeaderBox>
            <IconContainerLeft>
              <FlightOutlinedIcon
                sx={{ color: 'white', bgcolor: 'transparent' }}
              />
              <h5 style={{ color: '#fff', fontWeight: 'bold' }}>flight</h5>
            </IconContainerLeft>
            <IconContainerRight>
              <MeetingRoomOutlinedIcon
                sx={{ color: '#c6c6c6', bgcolor: 'transparent' }}
              />
              <h5 style={{ color: '#c6c6c6', fontWeight: 'bold' }}>hotel</h5>
            </IconContainerRight>
          </HeaderBox>
          <StyledDivder />
          <Box sx={{ paddingTop: '3rem' }}>
            <TravellCard modal={modal} setModal={setModal} />
            {/* {modal && <Modal />} */}
          </Box>
        </CardSection>
      </ContainerBox>
    </>
  );
};

export default HomePage;
