let arr = ["340px", "540px", "940px", "1340px", "1740px"];
function Background(){
	return (
		<div className="relative h-[100vh] overflow-hidden">
			<div className="relative">
				<div className="absolute bg-[#F3F4F6] w-[50%] h-[100vh]"></div>
				<div className="absolute bg-[#0F141E] right-0.5 w-[50%] h-[100vh]"></div>
			</div>
			<div className="absolute right-[50%] top-[50%] flex gap-[8px] translate-x-[50%] translate-y-[-50%] bg-[#F3F4F6] rounded-[9999px] p-[30px] border border-solid border-gray-300">
				<img src="imgs/Vector.png" ></img>
				<img src="imgs/Vector(1).png"></img>
			</div>
			<div className="absolute w-[340px] h-[340px] border border-solid border-gray-300 right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] rounded-[9999px]"></div> 
			<div className="absolute w-[540px] h-[540px] border border-solid border-gray-300 right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] rounded-[9999px]"></div> 
			<div className="absolute w-[940px] h-[940px] border border-solid border-gray-300 right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] rounded-[9999px]"></div> 
			<div className="absolute w-[1340px] h-[1340px] border border-solid border-gray-300 right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] rounded-[9999px]"></div> 
			<div className="absolute w-[1740px] h-[1740px] border border-solid border-gray-300 right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] rounded-[9999px]"></div> 
		</div>
	);	
}
export default Background;
