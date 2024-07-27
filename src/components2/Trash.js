// src/components2/Trash.js
import React from 'react';
import { useTrash } from '../context/TrashContext';
import { Container, Typography, List, ListItem, ListItemText, Button, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '16px',
          marginTop: '32px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          marginTop: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginLeft: '16px',
        },
      },
    },
  },
});

const Trash = () => {
  const { deletedItems, restoreFromTrash } = useTrash();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper>
          <Typography variant="h4" gutterBottom>
            Trash
          </Typography>
          {deletedItems.length > 0 ? (
            <List>
              {deletedItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => restoreFromTrash(item)}
                  >
                    Undo
                  </Button>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="h6">
              Trash is empty
            </Typography>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Trash;

