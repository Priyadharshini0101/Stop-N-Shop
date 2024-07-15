import React from 'react'
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from '@tanstack/react-table'
const sizes = {
    xs:"p-[31px]",
}



function ReactTable({columns,data=[],headerProps={},bodyProps={},className="",rowDataProps = {className:""
},size}){
    const tableConfig = {
        columns,data,getCoreRowModel:getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),

    }
    const table = useReactTable(tableConfig)
  return (
    <table className={className}>
        <thead {...headerProps}>
           {table.getHeaderGroups().map((headerGroup) =>(
            <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) =>(
                    <th key={header.id} {...header.column.columnDef?.meta}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header,header.getContext())}
                    </th>
                ))}
            </tr>
           ))}
        </thead>
        <tbody {...bodyProps}>
            {table.getRowModel().rows.map((row) =>(
                <tr {...rowDataProps} className={`${rowDataProps?.className}`} key={row.id}>
                    {row.getVisibleCells().map((cell) =>(
                        <td key={cell.id} className={size ? sizes[size]:``}>
                            {flexRender(cell.column.columnDef.cell,cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ReactTable