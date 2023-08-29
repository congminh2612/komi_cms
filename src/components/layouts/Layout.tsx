import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Sidebar } from './sidebar'

const Layout = () => {
  return (
    <div className="min-h-[calc(100vh-47px)] bg-main">
      <div className="flex">
        <div className="lg:min-w-[260px]">
          <Sidebar />
        </div>
        <div className="ml-8 w-full ">
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
