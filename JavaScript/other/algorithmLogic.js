

//버블 정렬
function sort(line){
    let swap;
    for(let i=0;i<line.length;i++){
        for(let j=0;j<line.length-1;j++){
            if(!compareMin(line[j],line[j+1])){
                swap = line[j];
                line[j] = line[j+1];
                line[j+1] = swap;
            }
        }
    }    
}

//시간 비교
console.log(compare("10:31","17:11"));

function compare(time1,time2) {
    let comp1 = time1.split(":");
    let comp2 = time2.split(":");
    if(comp1[0] < comp2[0]){
        return time1
    } else if(comp1[0] == comp2[0]){
        if(comp1[1] < comp2[1]){
            return time1
        }
        return time2
    } else {
        return time2
    }
}
