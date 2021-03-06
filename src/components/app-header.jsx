import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class appHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [
        {
          title: '2d幻灯-JS',
          url: '/slider-2d-js'
        },
        {
          title: '3d幻灯-CSS',
          url: '/slider-3d-css'
        },
        {
          title: '3d幻灯-JS',
          url: '/slider-3d-js'
        },
        {
          title: '彩带',
          url: '/rainbow'
        },
        {
          title: '粒子效果',
          url: '/particles'
        },
        {
          title: '不重色卡牌',
          url: '/cards'
        },
        {
          title: '璀璨星空',
          url: '/stars'
        },
        {
          title: '说明及其他',
          url: '/note'
        }
      ]
    }
  }
  render () {
    const lis = this.state.menus.map(item => {
      return (
        <li className="li" key={item.url}>
          <Link className={classnames('title', {
            'active': item.url === this.props.curPath
          })} to={item.url}>{item.title}</Link>
        </li>
      )
    })
    return (
      <header className="app-header">
        <nav className="nav">
          <ul className="ul">
            {lis}
          </ul>
        </nav>
      </header>
    )
  }
}

appHeader.propTypes = {
  curPath: PropTypes.string.isRequired
}
