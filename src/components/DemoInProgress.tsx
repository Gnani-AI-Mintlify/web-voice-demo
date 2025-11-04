import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { VISUALIZER_ELEMENT_ID } from "../constants/domIdentifiers";
import { useWebSocketAudio } from "../hooks/useWebSocketAudio";
import { BotStatus } from "../constants/WebTestingConstants";

interface DemoInProgressProps {
  onDemoEnd: () => void;
}

export const DemoInProgress: React.FC<DemoInProgressProps> = React.memo(
  ({ onDemoEnd }) => {
    const [conversationId, setConversationId] = useState<string>("");

    const { isPlaying, isConnected, connect, disconnect } = useWebSocketAudio({
      onConversationIdGenerated: setConversationId,
      onClose: onDemoEnd,
    });

    useEffect(() => {
      let mounted = true;

      const initializeConnection = async () => {
        if (mounted) {
          connect();
        }
      };

      initializeConnection();

      return () => {
        mounted = false;
        disconnect();
      };
    }, []);

    const handleEndDemo = () => {
      disconnect();
      onDemoEnd();
    };

    const status = isPlaying ? BotStatus.SPEAKING : BotStatus.LISTENING;

    return (
      <Box
        display={"flex"}
        width={314}
        flexDirection={"column"}
        gap={4}
        alignItems={"center"}
        marginY={4}
        textAlign={"center"}
      >
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <Box
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography variant="body2" color="text.secondary">
              Conversation ID:
            </Typography>
            <Box display={"flex"} gap={2}>
              <Typography variant="body2">{conversationId}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box display={"flex"} id={VISUALIZER_ELEMENT_ID}></Box>
        </Box>
        {!isConnected ? (
          <Box>Connecting...</Box>
        ) : (
          <>
            <Typography variant="body2">Status: {status}</Typography>
            <Button variant="contained" color="error" onClick={handleEndDemo}>
              End
            </Button>
          </>
        )}
      </Box>
    );
  }
);
