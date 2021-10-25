function rand(min,max){
	return Math.floor(Math.random() * (max-min+1))+ min;
}
_itemMap._elementData[17][1] = rand(4000,5000);
completeProgress(); 