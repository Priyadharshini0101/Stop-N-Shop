import { createContext , useContext } from 'react'

export const DataContext = createContext({
   data:[]
})

export const DataProvider = DataContext.Provider;

export default function useDataContext(){
    return useContext(DataContext)
}