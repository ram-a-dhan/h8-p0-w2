function assort(nums) {
	
	var min, mid, max;

	// find max, min, mid number
	var temp;
	for (var i = 0; i < nums.length-1; i++) {
		for (var j = 0; j < nums.length-1-i; j++) {
			if (nums[j] > nums[j+1]) {
				temp = nums[j];
				nums[j] = nums[j+1];
				nums[j+1] = temp;
			} 
		}
	}
    
    return nums;

}

var arr = [8,3,7,6,2,5,9,4,1,0];
console.log(assort(arr));
