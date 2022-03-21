var btn_cre = document.querySelector(".btn_cre");
var btn_sub = document.querySelector(".btn_sub");
var show_array = document.querySelector(".show_array");
var result = document.querySelector(".result");
var sort_to_max = document.getElementById("sort_to_max");
var sort_to_min = document.getElementById("sort_to_min");
var thisArray = new Array();

// hàm tạo mảng
function tao_mang (thisArray){
	for(let i=0; i<Math.floor(Math.random() * 11) + 10; i++){
	  thisArray.push(Math.floor(Math.random() * 91) + 10);
	}
	return thisArray;
}

// hàm sắp xếp tăng dần
function sap_tang (thisArray){
	for(let i=0; i<thisArray.length-1; i++){
		for(let j=0; j<thisArray.length-1-i; j++){
			if(thisArray[j] > thisArray[j+1]){
				let temp = thisArray[j];
				thisArray[j] = thisArray[j+1];
				thisArray[j+1] = temp;
			}
		}
	}
	return thisArray;
}

// hàm sắp xếp giảm dần
function sap_giam (thisArray){
	for(let i=0; i<thisArray.length-1; i++){
		for(let j=0; j<thisArray.length-1-i; j++){
			if(thisArray[j] < thisArray[j+1]){
				let temp = thisArray[j];
				thisArray[j] = thisArray[j+1];
				thisArray[j+1] = temp;
			}
		}
	}
	return thisArray;
}

// hàm thêm phần tử vào 1 vị trí trong hàm
function them (index, value, thisArray){
	thisArray.splice(index,0,value);
	return thisArray;
}

// bắt sự kiện click nút tạo mảng
btn_cre.addEventListener("click", function (){
	thisArray = [];
	show_array.textContent = tao_mang(thisArray);
});

// bắt sự kiện thay đổi radio
sort_to_max.addEventListener("change", function(){
	if(thisArray.length != 0){
		result.textContent = sap_tang(thisArray);
	}
});

// bắt sự kiện thay đổi radio
sort_to_min.addEventListener("change", function(){
	if(thisArray.length != 0){
		result.textContent = sap_giam(thisArray);
	}
});

// bắt sự kiện click nút thêm
btn_sub.addEventListener("click", function (){
	let index = document.querySelector(".index_add").value;
	let value = document.querySelector(".value_add").value;
	if(index != '' && value != ''){
		result.textContent = them(index, value, thisArray);
	}
});