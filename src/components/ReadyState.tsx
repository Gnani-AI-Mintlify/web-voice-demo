import { Box, Chip, Typography } from '@mui/material';
import React from 'react';

import MicIcon from '@mui/icons-material/Mic';

interface IReadyStateProps {
  onStart: () => void;
}

export const ReadyState: React.FC<IReadyStateProps> = ({
  onStart,
}) => {
  const handleStart = () => {

      onStart();
    
  };

  return (
    <Box
      display={'flex'}
      width={314}
      flexDirection={'column'}
      gap={6}
      alignItems={'center'}
      marginY={16}
    >
      <Chip
        label="Ready"
        color="primary"
        variant="outlined"
        size="small"
      />

      <Box
        height={116}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        width={116}
        bgcolor="primary.50"
        border={`2px solid #eee`}
        borderRadius={"6px"}
        boxShadow={`0px 0px 84px -12px #eeeA3`}
        sx={{ cursor: 'pointer' }}
        onClick={handleStart}
      >
        <MicIcon sx={{ fontSize: 34 }} />
      </Box>

      <Typography variant="body2">
        Click to start testing
      </Typography>
    </Box>
  );
};
