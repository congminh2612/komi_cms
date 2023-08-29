import { SidebarItem } from '.'
import { SidebarItems } from './constant'

const Sidebar = () => {
  return (
    <div className="w-[260px] hidden lg:block bg-gradient-primary min-h-[calc(100vh-40px)] rounded-2xl m-3">
      <div className="flex items-center justify-center space-x-4 py-6 mx-2 ">
        <div>
          <img src="src/assets/logo.png" alt="" className="w-10" />
        </div>
        <p className="text-white font-medium"> Komi Dashboard</p>
      </div>
      <div className="w-full h-[1px] bg-gradient-border"></div>
      <div className="space-y-7 pt-7">
        {SidebarItems.map((item) => {
          return (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              link={item.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
