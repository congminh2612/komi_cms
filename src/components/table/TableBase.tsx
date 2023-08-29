import {
  ColumnDef,
  ColumnResizeMode,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import Icon from 'components/icons/Icon'
import { useState } from 'react'

interface TableBaseProps<R> {
  data: R[]
  columns: ColumnDef<R>[]
}
function TableBase<R>(props: TableBaseProps<R>) {
  const { data, columns } = props

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>('onChange')

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    },

    debugTable: true
  })
  return (
    <div>
      <table
        style={{
          width: table.getCenterTotalSize()
        }}
        className="w-full table-auto"
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    style={{
                      width: header.getSize()
                    }}
                    className="text-gray-text-100 border-[2px] cursor-col-resize"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        aria-hidden={true}
                        onClick={header.column.getToggleSortingHandler()}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        style={{
                          transform:
                            columnResizeMode === 'onChange' &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                  table.getState().columnSizingInfo.deltaOffset
                                }px)`
                              : ''
                        }}
                        className={`${
                          header.column.getCanSort() ? 'cursor-pointer' : ''
                        }
                        ${header.column.getIsResizing() ? '' : ''}
                         flex items-center justify-center`}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <Icon icon="up" className="absolute top-0 " />,
                          desc: <Icon icon="down" className="ml-1" />
                        }[header.column.getIsSorted() as string] ?? (
                          <Icon
                            icon="upAndDown"
                            size="18"
                            className={`ml-[2px] mt-[2px]  ${
                              header.column.getCanSort() ? '' : 'hidden'
                            }`}
                          />
                        )}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} align="center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableBase
