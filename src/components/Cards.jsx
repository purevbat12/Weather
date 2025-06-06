"use client"
import { useState } from "react";
let time = Date.now();
function Cards({city}){
	let [location, setLocation] = useState(city);
	let time = new Date();
	let month = time.getMonth();
	switch(month){
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "Augest";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}
	let year = time.getFullYear();
	let day = time.getDate();
	let timeStr = month + " " + day + " " + year;
	let region, tempDay, tempNight, state;
	if(Object.keys(city) != 0){
		state = city.forecast.forecastday[0].day.condition.text;
		region = city.location.region;
		tempDay = city.forecast.forecastday[0].day.maxtemp_c;
		tempNight = city.forecast.forecastday[0].day.mintemp_c;
	}
	return (
		<div className="relative flex justify-around gap-[386px] -translate-y-[110%] z-[1] h-[80vh]">
			<img src="imgs/Ellipse 21.png" className="absolute w-[128px] h-[128px] left-[5%] -top-[5%] z-[0]"></img>
			<div className="absolute w-[374px] h-[788px] backdrop-blur-[12px] p-[40px] z-[2] left-[10%]">
				<div className="flex gap-[112px]">
					<div>	
						<h6 className="text-[#9CA3AF]">{timeStr}</h6>
						<h1 className="text-[#111827] text-[28px] font-[800]">{region}</h1>
					</div>
					<img src="imgs/localization_icon.png" className="w-[28px] h-[28px]"></img>	
				</div>	
				<img src="imgs/icon(1).png"></img>
				<h1 className="text-[100px] font-[800] text-[transparent] bg-[linear-gradient(to_bottom,_#111827,_#6B7280)] bg-clip-text text-fill-transparent">{tempDay}°</h1>
				<h3 className="text-[#FF8E27] text-[24px] font-[800]">{state}</h3>
				<div className="flex my-[48px] gap-[63.33px]">
					<img src="imgs/Rectangle.png" className="w-[32px] h-[32px]"></img>
					<img src="imgs/localization_icon.png"></img>
					<img src="imgs/Heart.png"></img>
					<img src="imgs/User.png"></img>
				</div>
			</div>
			<div className="absolute w-[374px] h-[788px] backdrop-blur-[12px] p-[40px] right-[10%] z-[2]">
				<div className="flex gap-[112px]">
					<div>
						<h6 className="text-[#9CA3AF] text-[18px]">{timeStr}</h6>
						<h1 className="text-[#FFFFFF] text-[28px] font-[800]">{region}</h1>
					</div>
					<img src="imgs/localization_icon.png" className="w-[28px] h-[28px]"></img>	
				</div>	
				<img src="imgs/icon.png"></img>
				<h1 className="text-[100px] text-[transparent] font-[800] bg-[linear-gradient(to_bottom,_#F9FAFB,_#6B7280)] bg-clip-text text-fill-transparent">{tempNight}°</h1>
				<h3 className="text-[#777CCE] text-[24px] font-[800]">{state}</h3>
				<div className="flex my-[48px] gap-[63.33px]">
					<img src="imgs/Rectangle.png" className="w-[32px] h-[32px]"></img>
					<img src="imgs/localization_icon.png"></img>
					<img src="imgs/Heart.png"></img>
					<img src="imgs/User.png"></img>
				</div>
			</div>
			<img src="imgs/Ellipse 22.png" className="absolute w-[128px] h-[128px] right-[5%] -bottom-[5%] z-[0]"></img>
		</div>
	);
}
export default Cards;
