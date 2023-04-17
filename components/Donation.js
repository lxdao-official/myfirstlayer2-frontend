import React, { useState, useContext } from 'react';
import { Button, Link, Box, Typography, Input } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ethers } from 'ethers';
import { useTranslations } from 'next-intl';
import ConnectWallet, { connectWallet } from './ConnectWallet';
import { WalletContext } from '../hooks/useWallet';
import showMessage, { SimpleModal } from './showMessage';
import { getEtherScanDomain } from '../common/utils';

function NumberComponent(props) {
  return (
    <Input
      value={props.value}
      size="small"
      inputProps={{
        step: 0.1,
        min: 0,
        max: 100,
        type: 'number',
      }}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export function DonationModal(props) {
  const [amount, setAmount] = useState(0.1);
  const [tx, setTx] = useState(null);
  const { fullAddress } = useContext(WalletContext);
  const t = useTranslations('SectionTeam');
  return (
    <SimpleModal
      title={t(`section-donation-title`)}
      visible={props.visible}
      onClose={() => {
        setTx(null);
        props.onClose();
      }}
      body={
        <Box color="#333">
          <Typography variant="body1" marginBottom={2}>
            {t(`section-donate-content-1`)}
          </Typography>
          <Typography variant="body1" marginBottom={4}>
            {t(`section-donate-content-2`)}{' '}
            <Link
              target="_blank"
              href="https://mirror.xyz/brucexu.eth/TgSi-oIDi836xJ8hpL92SMbiKO9Qie5x6ggbIpjBGnc"
            >
              {t(`section-donate-content-3`)}
            </Link>
          </Typography>
          <Typography variant="body1" fontWeight="700" marginBottom={1}>
            {t(`section-donate-content-4`)}
          </Typography>
          <Box
            marginBottom={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box variant="body1" marginTop="6px">
              {t(`section-donate-content-5`)}{' '}
              <NumberComponent
                value={amount}
                onChange={(newAmount) => {
                  setAmount(newAmount);
                }}
              />{' '}
              ETH
            </Box>
            {fullAddress ? (
              <Button
                variant="outlined"
                size="small"
                onClick={async () => {
                  try {
                    const { signer } = await connectWallet();
                    let txValue = {
                      to: '0x1b8556BDc549D20De33eCba674CF3Bbb88CfEd0A',
                      value: ethers.utils.parseEther(amount.toString()),
                    };
                    const tx = await signer.sendTransaction(txValue);
                    setTx(tx);
                  } catch (err) {
                    showMessage({
                      type: 'error',
                      title: 'Failed to donate',
                      body: err.message,
                    });
                  }
                }}
              >
                {t(`section-donate-content-6`)}
              </Button>
            ) : (
              <ConnectWallet />
            )}
          </Box>
          <Box marginBottom={3}>
            {tx && (
              <Typography variant="body1" marginTop="6px">
                {t(`section-donate-content-7`)}{' '}
                <Link
                  target="_blank"
                  href={`https://${getEtherScanDomain()}/tx/${tx.hash}`}
                >
                  {tx.hash}
                </Link>
              </Typography>
            )}
          </Box>
          <Typography variant="body1" fontWeight="700" marginBottom={1}>
            {t(`section-donate-content-8`)}
          </Typography>
          <Typography variant="body2">
            ENS:{' '}
            <Link
              target="_blank"
              href="https://etherscan.io/address/0x1b8556bdc549d20de33ecba674cf3bbb88cfed0a"
            >
              mfnft.eth
            </Link>
          </Typography>
          <Typography variant="body2" marginBottom={3}>
            <CopyToClipboard text="0x1b8556BDc549D20De33eCba674CF3Bbb88CfEd0A">
              <span style={{ cursor: 'pointer' }}>
                0x1b8556BDc549D20De33eCba674CF3Bbb88CfEd0A
              </span>
            </CopyToClipboard>{' '}
          </Typography>

          <Typography variant="body1" fontWeight="700" marginBottom={1}>
            {t(`section-donate-content-9`)}
          </Typography>
          <Typography variant="body1">
            <strong>{t(`section-donate-content-10`)}</strong>{' '}
            {t(`section-donate-content-11`)}{' '}
            <Link
              target="_blank"
              href="https://mirror.xyz/brucexu.eth/TgSi-oIDi836xJ8hpL92SMbiKO9Qie5x6ggbIpjBGnc"
            >
              {t(`section-donate-content-13`)}
            </Link>
            {t(`section-donate-content-14`)}
          </Typography>
        </Box>
      }
    />
  );
}

export default function DonationInstruction() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        sx={{
          cursor: 'pointer',
        }}
        borderRadius={2}
        bgcolor="#eee"
        flexDirection="column"
        paddingY={2}
        onClick={() => {
          setVisible(true);
        }}
      >
        <AddIcon sx={{ fontSize: 50 }}></AddIcon>
        <Typography variant="h6" marginTop={2}>
          {t(`section-donate-button`)}
        </Typography>
      </Box>
      <DonationModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
}
