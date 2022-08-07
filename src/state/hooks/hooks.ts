import {AppDispatchType, RootStateType} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useAppDispatch: () => AppDispatchType = useDispatch