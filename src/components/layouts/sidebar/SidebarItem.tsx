import Icon from 'components/icons/Icon'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarItemTypes } from './constant'

const SidebarItem: React.FC<Omit<SidebarItemTypes, 'id'>> = ({
  icon,
  title,
  link
}) => {
  return (
    <NavLink to={link} className="block">
      {({ isActive }) => (
        <div
          className={`flex items-center rounded-md text-gray-text space-x-6 mt-2 py-[14px] mx-3 pl-6 hover:bg-gray-hover hover:cursor-pointer ${
            isActive ? 'bg-gradient-blue' : ''
          }`}
        >
          <Icon icon={icon} size="24" />
          <p className="text-base font-light">{title}</p>
        </div>
      )}
    </NavLink>
  )
}

export default SidebarItem
