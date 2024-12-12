<script setup lang="ts">
import { Check, ChevronsUpDown, GalleryVerticalEnd, Search } from 'lucide-vue-next'
import { sidebar } from './sidebar'

const selectedVersion = ref(sidebar.versions[0])
const search = ref('')

function setSelectedVersion(version: string) {
  selectedVersion.value = version
}
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger class="w-full">
                <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <GalleryVerticalEnd class="size-4" />
                  </div>
                  <div class="flex flex-col gap-0.5 leading-none">
                    <span class="font-semibold">Documentation</span>
                    <span>v{{ selectedVersion }}</span>
                  </div>
                  <ChevronsUpDown class="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width]"
                align="start"
              >
                <DropdownMenuItem
                  v-for="version in sidebar.versions"
                  :key="version"
                  @click="setSelectedVersion(version)"
                >
                  v{{ version }}
                  <Check v-if="version === selectedVersion" class="ml-auto" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>

        <form @submit.prevent>
          <SidebarGroup class="py-0">
            <SidebarGroupContent class="relative">
              <Label for="search" class="sr-only">Search</Label>
              <SidebarInput
                id="search"
                v-model="search"
                placeholder="Search the docs..."
                class="pl-8"
              />
              <Search class="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup v-for="item in sidebar.navMain" :key="item.title">
          <SidebarGroupLabel>{{ item.title }}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem v-for="subItem in item.items" :key="subItem.title">
                <SidebarMenuButton :class="{ 'is-active': subItem.isActive }" as-child>
                  <a :href="subItem.url">{{ subItem.title }}</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>
