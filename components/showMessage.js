import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box, Dialog, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import getTheme from '../common/theme';

const IconWrapper = styled.div``;

const DialogWrapper = styled.div`
  padding: 20px;
  min-width: 200px;
  width: 100%;
  max-width: 450px;
  display: flex;
`;

const DialogBody = styled.div`
  margin-top: 10px;
  color: #00000073;
  line-height: 1.6;
  word-break: break-word;
`;

export function SimpleModal(props) {
  const { onClose, visible } = props;

  return (
    <Dialog onClose={onClose} open={visible}>
      <DialogWrapper>
        {props.type && (
          <IconWrapper>
            {props.type === 'success' ? (
              <CheckCircleIcon
                sx={{
                  fontSize: '40px',
                }}
                color="success"
              ></CheckCircleIcon>
            ) : (
              <ErrorIcon
                sx={{
                  fontSize: '40px',
                }}
                color="error"
              ></ErrorIcon>
            )}
          </IconWrapper>
        )}
        <Box paddingX={1}>
          <Box>
            <Typography lineHeight={2} variant="h6">
              {props.title}
            </Typography>
          </Box>
          <DialogBody>{props.body}</DialogBody>
        </Box>
      </DialogWrapper>
    </Dialog>
  );
}

function showMessage(options) {
  const { title, body, type } = options;
  const container = document.createDocumentFragment();

  function render({ visible }) {
    ReactDOM.render(
      <ThemeProvider theme={getTheme('light')}>
        <SimpleModal
          title={title}
          visible={visible}
          body={body}
          type={type}
          onClose={close}
        />
      </ThemeProvider>,
      container
    );
  }

  function close() {
    render({ visible: false });
  }

  render({ visible: true });
}

export default showMessage;
