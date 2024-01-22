'use client';

import { useState } from 'react';

import { contractAddress, abi } from '@/constants';

import { parseEther } from "viem";

import { prepareWriteContract, writeContract, waitForTransaction } from 'wagmi/actions';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'sonner'

import { ContributeProps } from '@/types';



const Contribute = ({ getDatas }: ContributeProps) => {

  const [amount, setAmount] = useState<string>('');

  const contribute = async () => {
    try {
      let money = parseEther(amount);
      const { request } = await prepareWriteContract({ address: contractAddress, abi: abi, functionName: 'contribute', value: money });
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({ hash: hash });
      setAmount('');
      await getDatas();
      const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Success' }), 1000));
      toast.promise(promise, {
        loading: 'Loading...',
        success: (data) => {
          return "Contribution successful!"
        },
        error: 'Error',
      });
    } catch (e) {
      toast.error('Error to contribute');
    }
  };

  return (
    <div className='space-y-5'>
      <h1 className="text-5xl font-bold">Contribute</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Your amount in ETH" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Button onClick={() => contribute()}>Contribute</Button>
      </div>
      <Toaster position="bottom-center" expand={true} richColors closeButton duration={1500} />
    </div>
  )
};

export default Contribute;