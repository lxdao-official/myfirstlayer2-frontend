import { BigNumber, ethers } from 'ethers';
import * as React from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { Button } from '@mui/material';

import { svg } from '../common/constans';

const MintNFTButton = ({ abi, contractAddress }) => {
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: 'mint',
    args: [svg],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Button
        variant="contained"
        disabled={!write || isLoading}
        onClick={() => write()}
      >
        {isLoading ? 'Minting...' : 'Mint'}
      </Button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MintNFTButton;
