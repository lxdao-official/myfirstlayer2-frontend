import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Dialog, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
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

interface SimpleModalProps {
  onClose: () => void;
  visible: boolean;
  type?: 'success' | 'error';
  title: string;
  body: ReactNode;
}

export function SimpleModal(props: SimpleModalProps) {
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
                  marginTop: '5px',
                }}
                color="success"
              ></CheckCircleIcon>
            ) : (
              <ErrorIcon
                sx={{
                  fontSize: '40px',
                  marginTop: '5px',
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

export function showMessage(options: {
  title: string;
  body?: ReactNode;
  type?: 'success' | 'error';
}) {
  const { title, body, type } = options;
  const container = document.createDocumentFragment();

  function render({ visible }: { visible: boolean }) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <ThemeProvider theme={getTheme('light')}>
        <SimpleModal
          title={title}
          visible={visible}
          body={body}
          type={type}
          onClose={close}
        />
      </ThemeProvider>
    );
  }

  function close() {
    render({ visible: false });
  }

  render({ visible: true });
}

export default showMessage;