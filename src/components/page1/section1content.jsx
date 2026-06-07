import LeftContent from './leftText'
import ImageContent from './imageContainer'
function Section1(props) {
    
    return <div className=" h-[90vh] flex items-center justify-between ">
        <LeftContent/>
        <ImageContent users = {props.user}/>
        
    </div>
}
export default Section1