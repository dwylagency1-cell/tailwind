import RightCard from './rightCard'
function ImageContent(props) {
    return <div>
        <div className=" w-[900px] h-[550px] mr-[70px] p-6 flex item-center gap-x-[20px]">
            {props.users.map(function(elem) {
                return <RightCard img = {elem.img} intro = {elem.intro} tag = {elem.tag}/>
            }) }

        </div>
    </div>
}
export default ImageContent