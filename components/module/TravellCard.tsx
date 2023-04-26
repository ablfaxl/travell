import { useState, useEffect, FC, SetStateAction, Dispatch } from 'react';
import { Stack, Box, Button } from '@mui/material';
import {
  OriginTextField,
  DestinationTextField,
  Container,
  LoopIconBox,
  ModelBox,
  StyledBox,
  StyledBox2,
} from './TravllCarsStyle';
import { DataResponseType } from './TravelCardType';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LoopIcon from '@mui/icons-material/Loop';

const TravellCard: FC<{
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}> = ({ modal, setModal }) => {
  const [origin, setOrigin] = useState<string>('t');
  const [destination, setDestination] = useState('t');
  const [data, setData] = useState<DataResponseType>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.beta.safrat.me/flight/place/search/?&query=${origin}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(true);
        console.log(data);
      });
  }, [origin]);

  useEffect(() => {
    fetch(
      `https://api.beta.safrat.me/flight/place/search/?&query=${destination}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(true);
        console.log(data);
      });
  }, [destination]);

  if (!loading) return <p>Please Wait... </p>;

  return (
    <>
      <Container component={'div'}>
        <OriginTextField
          label="origin (city, airport)"
          id="outlined-size-small"
          size="small"
          onClick={e => {
            setModal(true), e.stopPropagation();
          }}
          onChange={e => setOrigin(e.target.value)}
          value={origin}
        />
        <LoopIconBox component={'div'}>
          <LoopIcon sx={{ marginTop: 1 }} />
        </LoopIconBox>
        <DestinationTextField
          label="destination (city, airport)"
          id="outlined-size-small"
          size="small"
          onClick={e => {
            setModal(true), e.stopPropagation();
          }}
          onChange={e => setDestination(e.target.value)}
          value={destination}
        />
        {modal && (
          <ModelBox component={'div'}>
            <Stack component={'div'}>
              {data.map(item => (
                <>
                  <Box
                    component={'div'}
                    sx={{
                      p: '1rem',
                      dispaly: 'flex',
                      width: '100%',
                      '&:hover': {
                        background: '#ffb5b5',
                      },
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setOrigin(item.cities[0].cityNames[1].value);
                      setDestination(item.cities[0].cityNames[1].value);
                    }}
                  >
                    <StyledBox component={'div'}>
                      <StyledBox2 component={'div'}>
                        <Box component={'div'} sx={{ display: 'flex', gap: 1 }}>
                          <FmdGoodOutlinedIcon sx={{ color: 'grayText' }} />
                          <h4>{item.cities[0].cityNames[1].value}</h4>
                        </Box>
                        -<p>{item.cities[0].airports[0].airportCode}</p>
                      </StyledBox2>
                      <Box component={'div'} sx={{ paddingLeft: 5 }}>
                        <h5>{item.cities[0].cityCode}</h5>
                      </Box>
                    </StyledBox>
                    <p
                      style={{
                        marginLeft: '1rem',
                        paddingTop: 2,
                        color: 'GrayText',
                        fontSize: '13px',
                      }}
                    >
                      {item.countryNames[0].value}
                    </p>
                  </Box>
                </>
              ))}
              <Button></Button>
            </Stack>
          </ModelBox>
        )}
      </Container>
    </>
  );
};

export default TravellCard;
