import "./style.css";
import weather from "./fetch.js";
import show from "./show";

const btnSearch = document.querySelector(".btn-search");
const blankCity = document.querySelector("#city");

async function handleEvent(e) {
	e.preventDefault();
	if (blankCity.value === "") return;
	const info = await weather.getInfo(blankCity.value)
	show.showToUser(info)
	// console.log(info);
}
btnSearch.addEventListener("click", handleEvent);
