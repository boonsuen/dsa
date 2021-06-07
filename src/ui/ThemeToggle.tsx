import { useEffect, useState } from 'react';
import { Box, useColorMode } from 'theme-ui';
import Button from './Button';

const ThemeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // fade in animation
    setOpacity(1);
  }, []);

  return (
    <Box
      sx={{
        p: 3,
        position: 'absolute',
        top: 0,
        right: 0,
        opacity,
        transition: 'opacity .25s ease-in-out',
      }}
    >
      <Button
        sx={{ bg: 'gray', py: 1, px: 2, fontSize: 0, display: 'flex', height: 34, alignItems: 'center' }}
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
      >
        {colorMode === 'default' ? (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18"
            height="18"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        ) : (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18"
            height="18"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        )}
      </Button>
    </Box>
  );
};

export default ThemeToggle;
