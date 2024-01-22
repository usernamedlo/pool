'use client';

// Constants and Types
import { contractAddress, abi } from '@/constants'

// Types
import { ProgressionProps } from '@/types'

// React
import { useState, useEffect } from 'react'

// Wagmi
import { useAccount } from 'wagmi'

// Shadcnui
import { Progress } from "@/components/ui/progress"
import { Loader } from '@/components/ui/loader';

// Viem
import { formatEther } from 'viem'

const Progression = ({ isLoading, end, goal, totalCollected }: ProgressionProps) => {

  return (
    <>
      {isLoading ? <Loader /> : (
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">Progression</h1>
          <p className="text-gray-500">End date : {end}</p>
          <Progress
            value={(parseInt(totalCollected) / parseInt(goal)) * 100}
            max={parseInt(goal)}
            color={(parseInt(totalCollected) / parseInt(goal)) * 100 < 100 ? 'red' : 'green'}
          />
          <p>
            {Number(formatEther(BigInt(totalCollected))).toFixed(2)} ETH / {Number(formatEther(BigInt(goal))).toFixed(2)} ETH |&nbsp;
            <span className='text-green-500'>
              {((parseFloat(totalCollected) / parseFloat(goal)) * 100).toFixed(2)}%</span>
          </p >
        </div >
      )}

    </>
  )
};

export default Progression;
