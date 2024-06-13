declare namespace Application {
  type AppRoute = {
    path: string
    element?: ReactNode
    lazyFlag: boolean,
    lazy?: LazyRouteFunction<RouteObject>,
    children?: AppRoute[]
    loader?: AgnosticNonIndexRouteObject["loader"]
  }
}