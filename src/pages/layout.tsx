import { Component, PureComponent, ReactNode } from 'react'
import { h } from '..'
import { Outlet } from 'react-router'
import { connect, useSelector } from 'react-redux'
import { connectToRedux } from './connectToRedux'
import { Link } from 'react-router-dom'
import '../../static/css/layout.css'

class Layout extends Component<Application.ReduxProps> {
  menuList: Application.MenuType[] = [
    {
      url: 'home',
      name: '首页',
    },
    {
      url: 'important',
      name: '重点关注',
    },
    {
      url: 'teamPool',
      name: '团队公海',
    },
    {
      url: 'traceRecord',
      name: '跟进记录',
    },
    {
      url: 'contact',
      name: '联系人',
    },
  ]

  constructor(props: any) {
    super(props)
    this.render()
  }

  renderHeader() {
    return (
      <div style={{ padding: '15px 10px' }}>
        <span
          className="iconfont icon-gongyingshangguanlis"
          style={{ color: '#7052ff', fontSize: '26px' }}
        >
          <span style={{ fontSize: '20px', color: '#323232', fontWeight: 600, marginLeft: 10 }}>
            小欧-云端供应链
          </span>
        </span>
      </div>
    )
  }

  render(): ReactNode {
    const { value, increment, decrement } = this.props
    return (
      <div className='flex flex-col' style={{ width: '100%', height: '100%' }}>
        {this.renderHeader()}
        <div className='flex flex1'>
          <div className="menu">
            {this.menuList.map((item: Application.MenuType, index: number) => (
              <Link to={item.url} key={index}>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="content flex1">
            <div className='right'>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connectToRedux(Layout)
