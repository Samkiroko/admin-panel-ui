import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './userList.css'
import avatar from '../../images/avatar2.jpg'

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''}`,
    },
  ]

  const rows = [
    {
      id: 1,
      username: 'Samuel kiroko',
      avatar: { avatar },
      email: 'dev@react.com',
      status: 'Active',
      Transaction: '$120.00',
    },
    {
      id: 2,
      username: 'Samuel kiroko',
      avatar: { avatar },
      email: 'dev@react.com',
      status: 'Active',
      Transaction: '$120.00',
    },
    {
      id: 3,
      username: 'Samuel kiroko',
      avatar: { avatar },
      email: 'dev@react.com',
      status: 'Active',
      Transaction: '$120.00',
    },
    {
      id: 4,
      username: 'Samuel kiroko',
      avatar: { avatar },
      email: 'dev@react.com',
      status: 'Active',
      Transaction: '$120.00',
    },
    {
      id: 5,
      username: 'Samuel kiroko',
      avatar: { avatar },
      email: 'dev@react.com',
      status: 'Active',
      Transaction: '$120.00',
    },
  ]
  return (
    <div style={{ height: 400, width: '100%' }} className='userList'>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
    </div>
  )
}

export default UserList
