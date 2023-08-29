/* eslint-disable react/display-name */

import { forwardRef } from 'react'
import { IconContext } from 'react-icons'
import { icons } from './constants'
export type IconTypes = keyof typeof icons

interface IconProps {
  size?: string
  className?: string
  icon: IconTypes
  onClick?(): void
  title?: string
  stopPropagation?: boolean
}
type Ref = HTMLSpanElement

const Icon = forwardRef<Ref, IconProps>((props, ref) => {
  const { icon, size, className, onClick, title, stopPropagation, ...other } =
    props

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (stopPropagation) {
      e.stopPropagation()
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <span
      onClick={handleClick}
      title={title}
      ref={ref}
      {...other}
      aria-hidden="true"
    >
      <IconContext.Provider
        value={{
          size,
          className
        }}
      >
        {icons[icon]}
      </IconContext.Provider>
    </span>
  )
})

export default Icon
