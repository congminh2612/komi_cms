import Icon from 'components/icons/Icon'
import { TextInput } from 'components/input'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname.replace('/', '')
  const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1)

  return (
    <div className="mt-4 py-6 pl-6 pr-12 block space-y-4 lg:space-y-0 lg:flex items-center justify-between">
      <div className="">
        <div className="flex space-x-2">
          <Icon
            icon="home"
            className="text-gray-60 cursor-pointer"
            onClick={() => navigate('/dashboard')}
            size="20"
          />
          <span>/</span>
          <p className="text-gray-text-100">{capitalizedPath}</p>
        </div>
        <div className="text-xl text-gray-text-100 font-medium pt-2">
          {capitalizedPath}
        </div>
      </div>
      <div className="flex justify-between lg:space-x-8">
        <TextInput
          icon="search"
          placeholder="Search here"
          className="py-4 px-4"
          iconClass=""
        />
        <div className="flex justify-between items-center space-x-4 text-gray-text-100">
          <Icon
            className="cursor-pointer hover:text-slate-500"
            icon="person"
            size="24"
          />
          <Icon
            className="cursor-pointer hover:text-slate-500"
            icon="setting"
            size="24"
          />
          <Icon
            className="cursor-pointer hover:text-slate-500"
            icon="notification"
            size="24"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
