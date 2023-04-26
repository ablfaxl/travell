import { TextField,Box, styled } from '@mui/material';

export const Container = styled(Box)(
    ({ theme: breakpoint }) => `
        display: flex;
        align-items: center;
    `
)

export const LoopIconBox = styled(Box)(
    ({ theme: breakpoint }) => `
    border: 2px solid #c6c6c6;
    height: 40;
    padding: 2px 2px 0;
    // border-color: #c6c6c6;
    `
)





export const OriginTextField = styled(TextField)({
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
  '.MuiInputLabel-root': {
    color: '#f24c4c !important',
  },
  '.Mui-focused':{
    borderColor: 'gray'
  }
});
export const DestinationTextField = styled(TextField)({
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
  '.MuiInputLabel-root': {
    color: '#f24c4c !important',
  },
});

export const ModelBox = styled(Box)(
  ({ theme: breakpoint }) => `
    
  `
)