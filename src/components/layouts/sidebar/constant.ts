import { IconTypes } from 'components/icons/Icon'

export interface SidebarItemTypes {
  id: string
  title: string
  link: string
  icon: IconTypes
}

export const SidebarItems: SidebarItemTypes[] = [
  {
    id: '1',
    title: 'Dashboard',
    link: 'dashboard',
    icon: 'dashboard'
  },
  {
    id: '2',
    title: 'Products',
    link: 'product',
    icon: 'product'
  },
  {
    id: '3',
    title: 'Orders',
    link: 'order',
    icon: 'order'
  },
  {
    id: '4',
    title: 'Category',
    link: 'category',
    icon: 'category'
  },
  {
    id: '5',
    title: 'User',
    link: 'user',
    icon: 'user'
  },
  {
    id: '6',
    title: 'Sign in',
    link: '/sign-in',
    icon: 'signIn'
  },
  {
    id: '7',
    title: 'Sign up',
    link: '/sign-up',
    icon: 'signUp'
  }
]
