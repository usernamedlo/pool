'use client'

// ReactJS
import { useState } from "react"

// Constants and Types
import { contractAddress, abi } from "@/constants"
import { RefundProps } from "@/types"

// Viem
import { parseEther } from "viem"

// Wagmi
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'

// Shadcnui
import { Toaster, toast } from 'sonner'
import { Button } from '@/components/ui/button';


const Refund = ({ getDatas, end, goal, totalCollected }: RefundProps) => {

  const refund = async () => {
    try {
      const { request } = await prepareWriteContract({
        address: contractAddress,
        abi: abi,
        functionName: 'refund'
      })
      const { hash } = await writeContract(request)
      const data = await waitForTransaction({
        hash: hash,
      })
      await getDatas()
      const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Success' }), 2000));
      toast.promise(promise, {
        loading: 'Loading...',
        success: (data) => {
          return "Refund successful!"
        },
        error: 'Error',
      });
    } catch (e) {
      toast.error('Refund failed')
    }
  }

  return (
    <>
      <h1 className="text-5xl font-bold">Refund</h1>
      <div className="flex">
        {totalCollected < goal && Math.floor(Date.now() / 1000) > parseInt(end) && parseInt(totalCollected) != 0 ? (
          <Button
            color='red'
            size='lg'
            onClick={() => refund()}
          >
            Refund
          </Button>
        ) : (
          <>
            <p className="text-red-500">No refund available right now.</p>
          </>
        )}
      </div>
    </>
  )
}

export default Refund