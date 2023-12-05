const weather = (() => {
	// async function getInfo(location) {
	// 	const url = `https://api.weatherapi.com/v1/current.json?key=634e29e6e2e543c6abb121202230210&q=${location}`;
	// 	try {
	// 		const response = await fetch(url, { mode: "cors" });
	// 		if (!response.ok) throw new error(`${location} not found`);
	// 		const data = convertData(await response.json());
	// 		return data;
	// 	} catch (error) {
	// 		alert(error);
	// 		return null;
	// 	}
	// }
	function getInfo(location) {
		const url = `https://api.weatherapi.com/v1/current.json?key=634e29e6e2e543c6abb121202230210&q=${location}`;

		return fetch(url, { mode: "cors" })
			.then((res) => {
				if (!res.ok) return null;
				return res.json();
			})
			.then((res) => {
				return convertData(res);
			})
			.catch((error) => {
				console.log(error);
				return null;
			});
	}
	function onError() {}
	function convertData(data) {
		if (data === null) return null;
		const current = data.current;
		const location = data.location;

		const finalData = {};
		finalData.city = location.name;
		finalData.country = location.country;
		finalData.temperature = current.temp_c;
		finalData.humidity = current.humidity;
		finalData.cloud = current.cloud;
		finalData.feelsLike = current.feelslike_c;
		finalData.wind = current.wind_kph;
		finalData.conditionText = current.condition.text;
		finalData.conditionIcon = current.condition.icon;
		return finalData;
	}
	return { getInfo };
})();
export default weather;
