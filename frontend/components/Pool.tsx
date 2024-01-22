"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

import { AlertTriangle } from 'lucide-react';

import { useAccount } from "wagmi";


const Pool = () => {

  const { address, isConnected } = useAccount()

  return (
    <>
      {isConnected ? (
        <>
          OK
        </>

      ) : (
        <>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Please connect your wallet to continue.
            </AlertDescription>
          </Alert>
        </>
      )}
    </>
  )
}

export default Pool