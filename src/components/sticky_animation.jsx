export default function StickyAnimation(){
   
    return <>
        <div className="wrapper snap-y snap-mandatory overflow-y-auto h-screen">
            <div className="box1 w-full h-screen bg-red-500 text-black flex justify-center items-center snap-start">Box 1</div>
            <div className="box2 w-full h-screen bg-green-500 text-black flex justify-center items-center snap-start">Box 2</div>
            <div className="box3 w-full h-screen bg-blue-500 text-black flex justify-center items-center snap-start">Box 3</div>
        </div>
    </>
}