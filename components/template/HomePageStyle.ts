import { Box, styled, Card, Divider } from '@mui/material';

export const ContainerBox = styled(Box)(
  ({ theme: { breakpoints } }) => `
    display: flex;
    align-Items: center;
    justify-content: center;
    height: 100vh;
    `
);

export const CardSection = styled(Card)(
  ({ theme: breakpoint }) => `
    width: 400px;
    height: 400px;
    border-radius: 13px;
    padding: 2rem;
    `
);

export const HeaderBox = styled(Box)(
  ({ theme: breakpoint }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
);
export const IconContainerLeft = styled(Box)(
    ({ theme: breakpoint }) => `
    background-color: #f24c4c;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 50%;
    height: 2rem;
    padding: 1.2rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    `
)

export const IconContainerRight = styled(Box)(
    ({ theme: breakpoint }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 50%;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    `
)
export const StyledDivder = styled(Divider)(
    ({ theme: breakpoint }) => `
    background-color: #f24c4c;
    `
)