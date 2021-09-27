function stringToArray(string) {
	return string.split(' ');
}

function DNAtoRNA(dna) {
  return dna.replace (/T/g, "U");
}

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

function min(arr, toReturn) {
  return toReturn == 'value' ? Math.min(...arr): arr.indexOf(Math.min(...arr));
}
