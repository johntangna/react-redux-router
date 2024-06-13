import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import {
  HashRouter,
  Route,
  RouteObject,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import { router } from './routes'
import { h } from '.'
import { Component, ReactElement, ReactNode, StrictMode, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './store'

class Application {
  static container: HTMLElement = document.querySelector('#app') as HTMLElement

  static recursionRoute(
    route: Application.AppRoute,
    index: number,
  ): ReactElement {
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={<h2>加载中...</h2>}>
            <route.element />
          </Suspense>
        }
        loader={route?.loader}
      >
        {route?.children?.length &&
          route.children.map((item, index1) =>
            this.recursionRoute(item, index1),
          )}
      </Route>
    )
  }

  static root(): ReactNode {
    return (
      <StrictMode>
        <Provider store={store}>
          <ConfigProvider locale={zhCN}>
            <HashRouter basename="/">
              <Routes>
                {router.map((item: Application.AppRoute, index: number) =>
                  Application.recursionRoute(item, index),
                )}
              </Routes>
            </HashRouter>
          </ConfigProvider>
        </Provider>
      </StrictMode>
    )
  }
}

export { Application }
export default Application
