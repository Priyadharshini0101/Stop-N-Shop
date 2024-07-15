import { createContext , useContext } from 'react'


export const DataContext = createContext({
   data:[],
   scroll: () => {},
   header:false,
   setheader:() => {},
   addToCart:[],
   setaddtocart:() => {},
   applyCode:false,
   setapplycode:() =>{},
})

export const DataProvider = DataContext.Provider;

export default function useDataContext(){
    return useContext(DataContext)
}