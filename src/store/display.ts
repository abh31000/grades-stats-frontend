import { create } from 'zustand'

const useDisplay = create((set) =>({
    page: 0,
    setPage : (num_page: number) => set({page: num_page}),
}))


export  {useDisplay}