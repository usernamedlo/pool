'use client'

// Viem
import { formatEther, parseEther } from "viem"

// Types
import { ContributorsProps } from "@/types"

// Shadcnui
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Contributors = ({ events }: ContributorsProps) => {
  return (
    <>
      <h1 className="text-5xl font-bold">Contributors</h1>
      <div className="flex flex-col space-y-2">
        {events.slice(0, 3).map((event) => {
          return (
            <Card key={crypto.randomUUID()}>
              <CardHeader className="flex flex-col space-y-2">
                <CardTitle className="text-xl">Address : {event.contributor.substring(0, 5)}...{event.contributor.substring(event.contributor.length - 5)}</CardTitle>
                <CardDescription className="text-xl">Amount : {Number(formatEther(BigInt(event.amount))).toFixed(2)} ETH</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default Contributors