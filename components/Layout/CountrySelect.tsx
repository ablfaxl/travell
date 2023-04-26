import { useState, useEffect } from 'react';
import { Box, TextField, styled } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

export default function CountrySelect() {
  const [origin, setOrigin] = useState<string>('Tehran');
  const [destination, setDestination] = useState('');
  const [data, setData] = useState<DataResponseType>([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://api.beta.safrat.me/flight/place/search/?&query=${origin}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(true);
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
  console.log(origin);

  console.log(data);
  if (!loading) return <h1>Please Wait... </h1>;

  type DataResponseType = {
    resultType: string;
    countryCode: string;
    countryNames: [
      {
        language: string;
        value: string;
      },
      {
        language: string;
        value: string;
      }
    ];
    cities: [
      {
        cityCode: string;
        cityNames: [
          {
            language: string;
            value: string;
          },
          {
            language: string;
            value: string;
          }
        ];
        airports: [
          {
            airportCode: string;
            airportNames: [
              {
                language: string;
                value: string;
              },
              {
                language: string;
                value: string;
              }
            ];
          }
        ];
      }
    ];
  }[];

  const OriginTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '.MuiOutlinedInput-sizeSmall': {
        borderColor: 'black',
      },  
      fieldset: {
        borderRight: 'none',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
      },
    },
  });
  const DestinationTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '.MuiOutlinedInput-sizeSmall': {
        borderColor: 'black',
      },
      fieldset: {
        borderLeft: 'none',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
      },
    },
  });
  return (
    <>
      {/* <input value={origin} onChange={e => setOrigin(e.target.value)} /> */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <div style={{position:'relative'}}>
      <TextField   type='text' onChange={e=> setOrigin(e.target.value)} value={origin} placeholder='search your query' /> */}
        {/* search result */}
        {/* <div style={{position:'absolute'}}>
                {
                  data.map(item => {
                    return(
                      <li>{item.countryCode}</li>
                    )
                  })
                }
            </div>
        </div> */}
        <OriginTextField
          label="origin"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <Box
          sx={{
            border: 2,
            height: 40,
            borderColor: '#c6c6c6',
            ':hover': { borderColor: '#000',border:1 },
          }}
        >
          <LoopIcon sx={{ marginTop: 1 }} />
        </Box>
        <DestinationTextField
          label="destination"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
      </Box>
    </>
  );
}
