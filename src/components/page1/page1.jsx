import Navbar from './navbar'
import Section1 from './section1content'
function Page1(props) {
    return <div className="h-screen w-full bg-white-900">
        <Navbar/>
        <Section1 user = {props.users}/>

    </div>
}
export default Page1