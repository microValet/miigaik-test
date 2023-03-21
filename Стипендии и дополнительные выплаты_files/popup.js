if (document.getElementById("popup")) {
	document.getElementById("popup").addEventListener("click", showPopup);
};
	
var popupWrapper = document.createElement("div"), popup = document.createElement("div"), popupClose = document.createElement("div");
	
popupWrapper.classList.add("popup-wrapper");
popup.classList.add("popup");
popupClose.classList.add("popup-close");
	
var str1 = "<a href='http://miigaik.ru/applicants/courses/ege/' target='_blank' class='popup__link'><div class='popup__line'>Дистанционные курсы подготовки к ЕГЭ</div></a>";
var str2 = "<a href='http://miigaik.ru/applicants/courses/' target='_blank' class='popup__link'><div class='popup__line'>Подготовительные курсы ЕГЭ в Москве</div></a>";
var str3 = "<a href='http://miigaik.ru/applicants/courses/college/' target='_blank' class='popup__link'><div class='popup__line'>Подготовительные курсы для студентов колледжей</div></a>";

popupClose.innerHTML = "<div class='popup-close__line'></div><div class='popup-close__line'></div>";
popup.innerHTML = "<div class='popup__item'>" + str1 + "</div><div class='popup__item'>" + str2 + "</div><div class='popup__item'>" + str3 + "</div>";
	
popupWrapper.appendChild(popupClose);
popupWrapper.appendChild(popup);	

function showPopup(e) {
	document.body.appendChild(popupWrapper);

	event.preventDefault();
}
	
document.addEventListener("click", closePopup);
	
function closePopup(e) {
	if (e.target == popupWrapper || e.target == popupClose) {
			document.body.removeChild(popupWrapper);
	};
}