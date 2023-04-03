import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>(); //typed useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //typed useSelector
