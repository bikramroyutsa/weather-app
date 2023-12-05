"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["fetch"],{

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
				if (!res.ok) throw new error(`${location} not found`);
				else return res.json();
			})
			.then((res) => {
				return convertData(res);
			})
			.catch((error) => {
				alert(error);
				return null;
			});
	}

	function convertData(data) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/fetch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EscUdBQXFHLFNBQVM7QUFDOUc7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csU0FBUztBQUMzRztBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLENBQUM7QUFDRCxpRUFBZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcclxuXHQvLyBhc3luYyBmdW5jdGlvbiBnZXRJbmZvKGxvY2F0aW9uKSB7XHJcblx0Ly8gXHRjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02MzRlMjllNmUyZTU0M2M2YWJiMTIxMjAyMjMwMjEwJnE9JHtsb2NhdGlvbn1gO1xyXG5cdC8vIFx0dHJ5IHtcclxuXHQvLyBcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcblx0Ly8gXHRcdGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBlcnJvcihgJHtsb2NhdGlvbn0gbm90IGZvdW5kYCk7XHJcblx0Ly8gXHRcdGNvbnN0IGRhdGEgPSBjb252ZXJ0RGF0YShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG5cdC8vIFx0XHRyZXR1cm4gZGF0YTtcclxuXHQvLyBcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0Ly8gXHRcdGFsZXJ0KGVycm9yKTtcclxuXHQvLyBcdFx0cmV0dXJuIG51bGw7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG5cdGZ1bmN0aW9uIGdldEluZm8obG9jYXRpb24pIHtcclxuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTYzNGUyOWU2ZTJlNTQzYzZhYmIxMjEyMDIyMzAyMTAmcT0ke2xvY2F0aW9ufWA7XHJcblxyXG5cdFx0cmV0dXJuIGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KVxyXG5cdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKCFyZXMub2spIHRocm93IG5ldyBlcnJvcihgJHtsb2NhdGlvbn0gbm90IGZvdW5kYCk7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBjb252ZXJ0RGF0YShyZXMpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0YWxlcnQoZXJyb3IpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBkYXRhLmN1cnJlbnQ7XHJcblx0XHRjb25zdCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XHJcblxyXG5cdFx0Y29uc3QgZmluYWxEYXRhID0ge307XHJcblx0XHRmaW5hbERhdGEuY2l0eSA9IGxvY2F0aW9uLm5hbWU7XHJcblx0XHRmaW5hbERhdGEuY291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XHJcblx0XHRmaW5hbERhdGEudGVtcGVyYXR1cmUgPSBjdXJyZW50LnRlbXBfYztcclxuXHRcdGZpbmFsRGF0YS5odW1pZGl0eSA9IGN1cnJlbnQuaHVtaWRpdHk7XHJcblx0XHRmaW5hbERhdGEuY2xvdWQgPSBjdXJyZW50LmNsb3VkO1xyXG5cdFx0ZmluYWxEYXRhLmZlZWxzTGlrZSA9IGN1cnJlbnQuZmVlbHNsaWtlX2M7XHJcblx0XHRmaW5hbERhdGEud2luZCA9IGN1cnJlbnQud2luZF9rcGg7XHJcblx0XHRmaW5hbERhdGEuY29uZGl0aW9uVGV4dCA9IGN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcblx0XHRmaW5hbERhdGEuY29uZGl0aW9uSWNvbiA9IGN1cnJlbnQuY29uZGl0aW9uLmljb247XHJcblx0XHRyZXR1cm4gZmluYWxEYXRhO1xyXG5cdH1cclxuXHRyZXR1cm4geyBnZXRJbmZvIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==