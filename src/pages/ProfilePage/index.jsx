import ProfileCard from "./components/ProfileCard"
const ProfilePage = () => {

  return (
    <div className='p-4 '>
        <div className="flex justify-between items-center">
            <h2 className="text-[18px] lg:text-2xl font-bold">Profile</h2>
        </div>
        
        <ProfileCard />
    </div>
  )
}

export default ProfilePage
