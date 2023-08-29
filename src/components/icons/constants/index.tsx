import { AiFillCaretDown, AiFillCaretUp, AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill, BsPersonLinesFill } from 'react-icons/bs'
import { GiArchiveRegister } from 'react-icons/gi'
import { HiSearch } from 'react-icons/hi'
import { IoIosNotifications } from 'react-icons/io'
import { IoCubeSharp, IoSettingsSharp } from 'react-icons/io5'
import { MdCategory } from 'react-icons/md'
import { PiSignInBold } from 'react-icons/pi'
import {
  RiDashboardFill,
  RiExpandUpDownFill,
  RiShoppingBag3Fill
} from 'react-icons/ri'

const icons = {
  setting: <IoSettingsSharp />,
  search: <HiSearch />,
  home: <AiFillHome />,
  dashboard: <RiDashboardFill />,
  product: <IoCubeSharp />,
  order: <RiShoppingBag3Fill />,
  user: <BsPersonLinesFill />,
  category: <MdCategory />,
  person: <BsFillPersonFill />,
  notification: <IoIosNotifications />,
  signIn: <PiSignInBold />,
  signUp: <GiArchiveRegister />,
  down: <AiFillCaretDown />,
  up: <AiFillCaretUp />,
  upAndDown: <RiExpandUpDownFill />
}

export { icons }
