import { ThunkAction } from 'redux-thunk'
import { InferableComponentEnhancerWithProps } from 'react-redux'
import { Action } from 'redux'

export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never

export type CutMiddleFunction<T> = T extends (
  ...arg: infer Args
) => (...args: any[]) => infer R
  ? (...arg: Args) => R
  : never

export const unboxThunk = <Args extends any[], R, S, E, A extends Action<any>>(
  thunkFn: (...args: Args) => ThunkAction<R, S, E, A>,
) => (thunkFn as any) as CutMiddleFunction<typeof thunkFn>

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
