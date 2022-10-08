import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

function DashboardLayouts() {
  return (
    
    <div>
      <Menu />  
        DashboardLayouts
        <div id='content'>
        <Outlet />
        </div>
        
    </div>
  )
}

export default DashboardLayouts