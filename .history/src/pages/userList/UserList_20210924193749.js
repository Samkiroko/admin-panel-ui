import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './userList.css'
import avatar from '../../images/avatar2.jpg'

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='avatar' />
            <span>{params.row.username}</span>
          </div>
        )
      },
    },
    { field: 'email', headerName: 'email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'Transaction',
      headerName: 'Transaction Volume',
      width: 120,
    },
  ]

  const rows = [
    {
      id: 1,
      username: 'Samuel kiroko',
      avatar: `${avatar}`,
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
