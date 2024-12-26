import { create } from "zustand";
import {devtools} from 'zustand/middleware';

//import { StoreApi, UseBoundStore } from 'zustand'

const createSelectors = _store => {
  const store = _store
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    store.use[k] = () => store(s => s[k])
  }
  return store
}


const store0=create(devtools((set,get)=>({
  countA: 0,
  countB: 0,
  countC: 0, 
  incA: () => set(prev => ({ countA: prev.countA + 1 })),
  incB: () => set(prev => ({ countB: prev.countB + 1 })),
  incC: () => set(prev => ({ countC: prev.countC + 1 })),
  incBoth: () => {
    get().incA()
    get().incB()
  },
})))

export const store= createSelectors(store0);

export default store;



