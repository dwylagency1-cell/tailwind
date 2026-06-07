function RightCard(props) {
    return <div>
        <div className="bg-blue-200 w-[250px] h-[500px] rounded-[20px] relative">
            <div className=" w-[250px] h-[500px] rounded-[20px] absolute flex flex-col item-center justify-end  ">
                <div className="  w-[250px] h-[200px] rounded-[20px] p-[20px] ">
                    <p className="text-white">{props.intro}</p>
                </div>
                <div className="w-[200px] h-[100px] ml-[30px] flex items-center justify-center ">
                    <div className="bg-blue-400 w-[190px] h-[60px] rounded-[30px] flex items-center justify-center">
                        <p className="text-white text-[18px]">{props.tag}</p>
                    </div>
                </div>
            </div>
            <img className="h-full w-full object-cover rounded-[20px]" src={props.img} ></img>
        </div>
    </div>
}
export default RightCard