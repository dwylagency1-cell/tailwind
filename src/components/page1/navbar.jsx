function Navbar() {
    return <div className=" h-[80px] flex items-center justify-between" >
        
        <div className=" w-[300px] h-[80px] flex items-center justify-center">
            <div className="bg-black  z-100 w-[150px] pt-1.5 pb-1.5 flex items-center justify-center rounded-[20px]">
                <p className="para uppercase">Target Audience</p>
            </div>
        </div>
        <div className=" w-[300px] h-[80px] flex items-center justify-center">
            <div className="bg-white  z-100 w-[250px] pt-1.5 pb-1.5 flex items-center justify-center rounded-[20px]">
                <p className="para2 uppercase">Digital Banking Platform</p>
            </div>
        </div>
    </div>
}
export default Navbar