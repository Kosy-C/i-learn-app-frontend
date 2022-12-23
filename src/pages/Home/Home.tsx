import StudentHistoryPage from '../../components/studentHistoryPage/studentHistoryPage'

import ResetPassword from '../../pages/ResetPassword/resetPassword'
import SetNewPassword from '../../pages/ResetPassword/setNewPassword'

const Home = () => {
  return (
    <div>
      <StudentHistoryPage />
      <ResetPassword />
      <SetNewPassword />
    </div>
  )
}

export default Home
