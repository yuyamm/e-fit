'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'

type ChildrenProps = {
  children: React.ReactNode
}

export default function NextAuthProvider({ children }: ChildrenProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}