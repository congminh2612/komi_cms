import { ColumnDef } from '@tanstack/react-table'
import { IUser } from '../types'

export const columns: ColumnDef<IUser>[] = [
  {
    header: 'STT',
    accessorKey: 'id',
    cell: (info) => info.getValue()
  },
  {
    header: 'Name111',
    cell: (info) => info.row.original.name
  },
  {
    header: 'Email',
    accessorKey: 'email',
    cell: (info) => info.getValue()
  },
  {
    header: 'Phone',
    accessorKey: 'phone'
  }
]
