import { Outlet, useNavigate } from 'react-router-dom'
import setThemeStore from '@/stores/setThemeStore.ts'
import { Avatar } from '@heroui/react'

const navList = [
  { path: '/home', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' }
]

const Main = () => {
  const isDark = setThemeStore(state => state.isDark)
  const changeTheme = setThemeStore(state => state.setTheme)
  const navigate = useNavigate()
  return (
    <div className="flex  h-screen bg-cyan">
      <div className="w-1/5 bg-amber-100">
        <div className="h-16 bg-blue-100"></div>
        <div className="h-20 bg-cyan-700">
          <Avatar name="Jericho" />
        </div>
      </div>
      <div className="bg-black flex-1">right</div>
    </div>
  )
}

export default Main
