import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import './userList.css'
import avatar from '../../images/avatar2.jpg'
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../dummyData'

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
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='userListAction'>
            <button className='userListEdit'>Edit</button>
            <DeleteOutline className='userListDelete' />
          </div>
        )
      },
    },
  ]

  return (
    <div style={{ height: '100vh', width: '100%' }} className='userList'>
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
