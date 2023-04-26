import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { ReactNode, FC } from 'react';
import bgImage from '../../public/image/iran-shiraz-persepolis-ruin-wallpaper-preview.jpg';

interface MyProps {
  children?: ReactNode;
}

const Layout: FC<MyProps> = ({ children }) => {
  return (
    <Container>
      <Image src={bgImage} alt="/" layout="fill" style={{objectFit:'cover',zIndex: -1}} />
      <Box>{children}</Box>
    </Container>
  );
};

export default Layout;
