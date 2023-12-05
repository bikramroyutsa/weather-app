const show = (() => {
	function showToUser(info) {
		const searchedLocation = document.querySelector("#city").value;
		if (info != null) {
			const city = document.querySelector(".city");
			const country = document.querySelector(".country");
			const temperature = document.querySelector(".temperature");
			const humidity = document.querySelector(".humidity");
			const wind = document.querySelector(".wind");
			const condition = document.querySelector(".condition-text");
			const cloud = document.querySelector(".cloud");
			const feelsLike = document.querySelector(".feels-like");

			humidity.textContent = `${info.humidity}%`;
			city.textContent = info.city;
			country.textContent = info.country;
			temperature.textContent = `${info.temperature}° C`;
			condition.textContent = info.conditionText;
			wind.textContent = `${info.wind}%`;
			cloud.textContent = `${info.cloud}%`;
			feelsLike.textContent = `${info.feelsLike}° C`;
		}
		if (info === null) alert(`${searchedLocation} not found`);
	}
	return { showToUser };
})();
export default show;
