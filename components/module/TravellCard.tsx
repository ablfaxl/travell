import {
  useState,
  useEffect,
  FC,
  SetStateAction,
  Dispatch,
  useRef,
} from 'react';
import { Box } from '@mui/material';
import {
  OriginTextField,
  DestinationTextField,
  Container,
  LoopIconBox,
  ModelBox,
} from './TravllCarsStyle';
import { DataResponseType } from './TravelCardType';

import LoopIcon from '@mui/icons-material/Loop';
import Modal from './Modal';

const TravellCard: FC<{
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}> = ({ modal, setModal }) => {
  const [origin, setOrigin] = useState<string>('q');
  const [destination, setDestination] = useState('');
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
        setDestination(data);
        setLoading(true);
      });
  }, []);

  if (!loading) return <p>Please Wait... </p>;

  return (
    <>
      <Container
        sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
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

        <LoopIconBox>
          <LoopIcon sx={{ marginTop: 1 }} />
        </LoopIconBox>
        <DestinationTextField
          label="destination (city, airport)"
          id="outlined-size-small"
          size="small"
        />
        {modal && (
          <ModelBox
            // style={{
            //   position: 'absolute',
            //   top: '40px',
            //   height: '200px',
            //   width: '100%',
            //   background: 'red',
            //   overflowY: 'scroll',
            // }}
          >
            {data.map(item => (
              <input
                type="text"
                value={item.countryCode}
                onClick={() => {
                  setOrigin(item.countryCode);
                }}
              />
            ))}
          </ModelBox>
        )}
      </Container>
    </>
  );
};

export default TravellCard;
