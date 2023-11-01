function tailRecursiveFib(previousTerm, runningTotal, currentTerm, limit){
	if (currentTerm == limit){
		return runningTotal;
	}
	else{ 
		return tailRecursiveFib(runningTotal, runningTotal+previousTerm, currentTerm+1, limit)
	}
}

function tailRecursion(x){
	if (x<=0)
		return 0;
	else
		return tailRecursiveFib(0,1,1,x);
}


function nonRecursiveFib(x){
	if (x<=0)
		return 0
	else if (x == 1)
		return 1
	else
		return (nonRecursiveFib(x-1)+nonRecursiveFib(x-2))
}

//console.log(nonRecursiveFib(7))
