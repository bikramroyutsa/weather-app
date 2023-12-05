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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/fetch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EscUdBQXFHLFNBQVM7QUFDOUc7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csU0FBUztBQUMzRztBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDO0FBQ0QsaUVBQWUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XHJcblx0Ly8gYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyhsb2NhdGlvbikge1xyXG5cdC8vIFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NjM0ZTI5ZTZlMmU1NDNjNmFiYjEyMTIwMjIzMDIxMCZxPSR7bG9jYXRpb259YDtcclxuXHQvLyBcdHRyeSB7XHJcblx0Ly8gXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG5cdC8vIFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgZXJyb3IoYCR7bG9jYXRpb259IG5vdCBmb3VuZGApO1xyXG5cdC8vIFx0XHRjb25zdCBkYXRhID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcclxuXHQvLyBcdFx0cmV0dXJuIGRhdGE7XHJcblx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdC8vIFx0XHRhbGVydChlcnJvcik7XHJcblx0Ly8gXHRcdHJldHVybiBudWxsO1xyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuXHRmdW5jdGlvbiBnZXRJbmZvKGxvY2F0aW9uKSB7XHJcblx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT02MzRlMjllNmUyZTU0M2M2YWJiMTIxMjAyMjMwMjEwJnE9JHtsb2NhdGlvbn1gO1xyXG5cclxuXHRcdHJldHVybiBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSlcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdGlmICghcmVzLm9rKSByZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBjb252ZXJ0RGF0YShyZXMpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gb25FcnJvcigpIHt9XHJcblx0ZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xyXG5cdFx0aWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IGRhdGEuY3VycmVudDtcclxuXHRcdGNvbnN0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbjtcclxuXHJcblx0XHRjb25zdCBmaW5hbERhdGEgPSB7fTtcclxuXHRcdGZpbmFsRGF0YS5jaXR5ID0gbG9jYXRpb24ubmFtZTtcclxuXHRcdGZpbmFsRGF0YS5jb3VudHJ5ID0gbG9jYXRpb24uY291bnRyeTtcclxuXHRcdGZpbmFsRGF0YS50ZW1wZXJhdHVyZSA9IGN1cnJlbnQudGVtcF9jO1xyXG5cdFx0ZmluYWxEYXRhLmh1bWlkaXR5ID0gY3VycmVudC5odW1pZGl0eTtcclxuXHRcdGZpbmFsRGF0YS5jbG91ZCA9IGN1cnJlbnQuY2xvdWQ7XHJcblx0XHRmaW5hbERhdGEuZmVlbHNMaWtlID0gY3VycmVudC5mZWVsc2xpa2VfYztcclxuXHRcdGZpbmFsRGF0YS53aW5kID0gY3VycmVudC53aW5kX2twaDtcclxuXHRcdGZpbmFsRGF0YS5jb25kaXRpb25UZXh0ID0gY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuXHRcdGZpbmFsRGF0YS5jb25kaXRpb25JY29uID0gY3VycmVudC5jb25kaXRpb24uaWNvbjtcclxuXHRcdHJldHVybiBmaW5hbERhdGE7XHJcblx0fVxyXG5cdHJldHVybiB7IGdldEluZm8gfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9