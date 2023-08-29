import TableBase from 'components/table/TableBase'
import { columns } from './constants'
import { IUser } from './types'

const UserScreen = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Tran Minh',
      email: 'tr.congminh@gamil.com',
      phone: '0968497046'
    },
    {
      id: 2,
      name: 'Nguyen Van d',
      email: 'tr223@gamil.com',
      phone: '0975219244'
    },
    {
      id: 3,
      name: 'Nguyen Van b',
      email: 'tr223@gamil.com',
      phone: '0975219244'
    },
    {
      id: 4,
      name: 'Tran Van a',
      email: 'tr223ww@gamil.com',
      phone: '0975219244'
    },
    {
      id: 5,
      name: 'Pham Van a',
      email: 'ztr223@gamil.com',
      phone: '0275219244'
    }
  ]
  return (
    <div>
      <h1>User Table</h1>
      <TableBase data={users} columns={columns} />
    </div>
  )
}

export default UserScreen
