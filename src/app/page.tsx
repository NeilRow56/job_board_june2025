import { AppSidebarClient } from '@/components/sidebar/_AppSidebarClient'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-y-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger />
            <span className='text-xl text-nowrap'>WDS Jobs</span>
          </SidebarHeader>
          <SidebarContent>Sidebar Content</SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className='mb-16'>Draft</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <main className='flex-1'>Main content</main>
      </AppSidebarClient>
    </SidebarProvider>
  )
}
