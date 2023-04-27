import { TextField, Box, Button, styled } from '@mui/material';

export const Container = styled(Box)(
  ({ theme: breakpoint }) => `
        display: flex;
        align-items: center;
        position: relative;
        z-index: 1;
    `
);

export const LoopIconBox = styled(Box)(
  ({ theme: breakpoint }) => `
    border: 1.5px solid #c6c6c6;
    height: 40;
    padding: 2px 6px 0;
    cursor: pointer;
    `
);

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
    color: '#f24c4c!important',
  },
  fieldset: {
    borderRight: 'none',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
  '&:focus-within fieldset, &:focus-visible fieldset': {
    border: '1px solid #c0c0c0!important',
  },
});

export const DestinationTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '.MuiOutlinedInput-sizeSmall': {
      borderColor: 'black',
    },
    '.MuiInputLabel-root': {
      color: '#f24c4c!important',
    },
    fieldset: {
      borderLeft: 'none',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
  },
  '&:focus-within fieldset, &:focus-visible fieldset': {
    border: '1px solid #c0c0c0!important',
  },
});

export const ModelBox = styled(Box)(
  ({ theme: breakpoint }) => `
  position: absolute;
  top: 40px;
  height: 200px;
  width: 100%;
  background-color: #fff;
  overflow-y: scroll;
  box-sizing: border-box;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  `
);

export const StyledBox = styled(Box)(
  ({ theme: breakpoint }) => `
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 10px;
    `
);

export const StyledBox2 = styled(Box)(
  ({ theme: breakpoint }) => `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
    `
);

export const CustomButton = styled(Button)`
  background-color: #f24c4c;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  &:hover {
    background-color: #af2020;
  }
`;