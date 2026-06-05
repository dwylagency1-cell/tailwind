import {ArrowUpRight} from 'lucide-react'
function LeftContent() {
    return <div>
        <div className=" w-[300px] h-[550px] ml-[70px]">
            <div className=" w-[300px] h-[400px]">
                <h1 className="text-5xl pt-[40px] font-semibold leading-[50px]">Prospective customer segmentation</h1>
                <p className="mt-[30px]">Depending on customer satisfactionand access to banking products, potentia target audience can be divided into three groups</p>

            </div>
            <div className=" w-[300px] h-[150px] flex items-center justify-left">
                <ArrowUpRight size={50} />
            </div>
        </div>
    </div>
}
export default LeftContent