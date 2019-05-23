import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './styles/header.module.scss'
import logo from '../../static/gs100.png'

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <nav>  
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/skills'>Skills</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Projects</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Articles</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header