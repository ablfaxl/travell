import { useState, useEffect, FC, SetStateAction, Dispatch } from 'react';
import { Stack, Box } from '@mui/material';
import {
  OriginTextField,
  DestinationTextField,
  Container,
  LoopIconBox,
  ModelBox,
  StyledBox,
  StyledBox2,
  CustomButton,
} from './TravllCardStyle';
import { DataResponseType } from './TravelCardType';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import { useRouter } from 'next/router';
import LoadingSpinner from './Loading/Loading';

const TravellCard: FC<{
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modal2: boolean;
  setModal2: Dispatch<SetStateAction<boolean>>;
}> = ({ modal, setModal, modal2, setModal2 }) => {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataResponseType>([]);
  const [originUrll, setoriginUrll] = useState<
    SetStateAction<never[] | string>
  >([]);
  const [destinationUrll, setDestinationUrll] = useState<
    SetStateAction<never[] | string>
  >([]);

  const router = useRouter();

  useEffect(() => {
    if (!origin) return;
    fetch(`https://api.beta.safrat.me/flight/place/search/?&query=${origin}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, [origin]);

  useEffect(() => {
    if (!destination) return;
    fetch(
      `https://api.beta.safrat.me/flight/place/search/?&query=${destination}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, [destination]);

  const destinationUrl = (DesCityCode: string): void => {
    setDestinationUrll(DesCityCode);
  };

  const originUrl = (OrgCityCode: string): void => {
    setoriginUrll(OrgCityCode);
  };

  const switchState = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const SubmitHandler = () => {
    router.push(
      `https://beta.safrat.me/en/flights?adult=1&child=0&destinationCode=${destinationUrll}&destinationCountry=${destination}&destinationLabel=${' '}&destinationType=CITY&flightClass=ECONOMY&infant=0&originCode=${originUrll}&originCountry=${origin}&originLabel=${'OrgiCity'}&originType=CITY&start=2023-4-27&tripType=ONEWAY`
    );
  };


  return (
    <>
      <Container component={'div'}>
        <OriginTextField
          onKeyUp={() => setIsLoading(true)}
          label="origin (city, airport)"
          id="outlined-size-small"
          size="small"
          onClick={e => {
            setModal(true);
            e.stopPropagation();
          }}
          onChange={e => setOrigin(e.target.value)}
          value={origin}
        />
        <LoopIconBox onClick={switchState} component={'div'}>
          <LoopIcon sx={{ marginTop: 1 }} />
        </LoopIconBox>
        <DestinationTextField
          label="destination (city, airport)"
          id="outlined-size-small"
          size="small"
          onClick={e => {
            setModal2(true);
            e.stopPropagation();
          }}
          onChange={e => setDestination(e.target.value)}
          value={destination}
        />
        {modal &&
          (isLoading && (
            <ModelBox component={'div'}>
              <Stack component={'div'}>
                {data.map(item => (
                  <>
                    <Box
                      key={item.cities[0].cityNames[1].value}
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
                        originUrl(item.cities[0].cityCode);
                        setOrigin(item.cities[0].cityNames[1].value);
                      }}
                    >
                      <StyledBox component={'div'}>
                        <StyledBox2 component={'div'}>
                          <Box
                            component={'div'}
                            sx={{ display: 'flex', gap: 1 }}
                          >
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
              </Stack>
            </ModelBox>
          ))}
        {/*  */}
        {modal2 &&
          (isLoading ? (
            <ModelBox component={'div'}>
             
              <LoadingSpinner />
            </ModelBox>
          ) : (
            <ModelBox component={'div'}>
              <Stack component={'div'}>
                {data.map(item => (
                  <>
                    <Box
                      key={item.cities[0].cityNames[1].value}
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
                        destinationUrl(item.cities[0].cityCode);
                        setDestination(item.cities[0].cityNames[1].value);
                      }}
                    >
                      <StyledBox component={'div'}>
                        <StyledBox2 component={'div'}>
                          <Box
                            component={'div'}
                            sx={{ display: 'flex', gap: 1 }}
                          >
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
              </Stack>
            </ModelBox>
          ))}
      </Container>

      <Stack sx={{ pt: 10 }}>
        <CustomButton onClick={SubmitHandler} variant="contained">
          SEARCH FLIGHTS
        </CustomButton>
      </Stack>
    </>
  );
};

export default TravellCard;
