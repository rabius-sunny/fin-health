import store from 'services/states'
import { RootState } from './../../index.d'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
