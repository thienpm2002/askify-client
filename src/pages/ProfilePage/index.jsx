import ProfileCard from "./components/ProfileCard"
import PageHeader from "@/components/common/PageHeader"

const ProfilePage = () => {

  return (
    <div className='p-4 '>
        <PageHeader title='Profile'/>
        
        <ProfileCard />
    </div>
  )
}

export default ProfilePage
