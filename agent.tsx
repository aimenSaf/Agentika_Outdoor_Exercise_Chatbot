import React from 'react';
import {
  Agent,
  TTS,
} from 'react-agents';

//

export default function MyAgent() {
  return (
    <Agent /* */ >
      <TTS voiceEndpoint="elevenlabs:uni:PSAakCTPE63lB4tP9iNQ" />
    </Agent>
  );
}
