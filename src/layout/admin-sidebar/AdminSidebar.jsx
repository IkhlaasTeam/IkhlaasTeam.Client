import React from 'react'
import './AdminSidebar.scss'
import { NavLink, Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <aside className='sidebar'>
        <Link to='/'>Logo</Link>
        <div className="sidebar__menu">
            <ul className="menu__list">
                <li className='list__item'>
                    <NavLink className={({isActive})=> isActive ? 'link link--active' : 'link'} to=''>Manage Products</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'link link--active' : 'link'} to='sellers'>Sellers</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'link link--active' : 'link'} to='manage-hashar'>Manage Hashars</NavLink>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default AdminSidebar