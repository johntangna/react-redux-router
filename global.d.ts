
declare namespace Application {
  type AppRoute = {
    path: string
    element?: ReactNode
    children?: AppRoute[]
    isAuth?: boolean
  }

  type MenuType = {
    url: string
    name: string
  }

  type ReducerType = {
    counter: Reducer<State>
  }

  type ReduxProps = {
    value: number
    increment: Function
    decrement: Function
  }
}