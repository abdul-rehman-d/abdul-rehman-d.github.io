import { create } from 'zustand'

export type Store = {
  sidebarShow: boolean
  toggleSidebarShow: () => void
}

const useSidebarStore = create<Store>((set) => ({
  sidebarShow: window.innerWidth > 991 ? true : false,
  toggleSidebarShow: () => set((state) => ({ sidebarShow: !state.sidebarShow })),
}))

export default useSidebarStore
