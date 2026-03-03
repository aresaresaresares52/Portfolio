import { ref, readonly } from 'vue'

const isSidebarOpen = ref(true)

export function useLayout() {
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
  }

  const openSidebar = () => {
    isSidebarOpen.value = true
  }

  return {
    isSidebarOpen: readonly(isSidebarOpen),
    toggleSidebar,
    closeSidebar,
    openSidebar
  }
}
