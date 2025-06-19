import { Suspense } from 'react'

import { SidebarMenuButton } from '@/components/ui/sidebar'
import { LogOutIcon } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'
import { SignOutButton } from '@/services/clerk/components/AuthButtons'
import { SidebarUserButtonClient } from './_SidebarUserButtonClient'

export function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  )
}

async function SidebarUserSuspense() {
  const { userId } = await auth()

  if (userId == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    )
  }

  return (
    <SidebarUserButtonClient
      user={{ email: 'kyle@test.com', name: 'Kyle Cook', imageUrl: '' }}
    />
  )
}
