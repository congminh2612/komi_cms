/* eslint-disable react/display-name */
import clsx from 'clsx'
import Icon, { IconTypes } from 'components/icons/Icon'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BaseInputProps {
  fullWidth?: boolean
  className?: string
  error?: string
  spacing?: string
  icon?: IconTypes
  iconClass?: string
  size?: string
  handleIconClick?(): void
  placeholder?: string
}

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  BaseInputProps
const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      fullWidth,
      className,
      spacing,
      disabled,
      icon,
      iconClass,
      placeholder,
      handleIconClick = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(spacing ? '' : 'space-x-2', fullWidth && 'w-full')}>
        <div className="relative">
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={twMerge(
              'border border-gray-400 p-[12px] outline-none  rounded-lg bg-main',
              !disabled && ' focus:border-slate-900',
              fullWidth && 'w-full',
              className
            )}
            {...props}
          />
          {icon && (
            <Icon
              onClick={handleIconClick}
              size="24px"
              className={twMerge(
                'absolute right-[10.5px] top-1/2 -translate-y-1/2 text-gray-text-100 cursor-pointer',
                iconClass
              )}
              icon={icon}
            />
          )}
        </div>
      </div>
    )
  }
)

export default TextInput
