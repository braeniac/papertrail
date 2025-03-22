"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { ReceiptText } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

export default function Header() {


  const pathname = usePathname(); 
  const isHomePath = pathname === "/";



    return (
      <div className={`p-4 items-center flex justify-between ${isHomePath ? "bg-blue-50" : "bg-white bg-border"}`}>
      
        
        <Link href="/" className="items-center flex">
          <ReceiptText className="w-6 h-6 mr-2 text-blue-600"/>
          <h1 className="text-xl font-semibold">PaperTrail</h1>
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>

            <Link href="/receipts">
              <Button variant="outline">My Receipts</Button>
            </Link>

            <Link href="/manage-plan">
              <Button>Manage Plan</Button>
            </Link>

            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>

      </div>
    );
  }
  