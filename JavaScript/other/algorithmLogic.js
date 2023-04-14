//버블 정렬과 시간비교로 푸는 문제
//code start
let line = [["one","12:00","40"],["two","12:30","50"],["three","11:10","20"]];
console.log(sol(line));

function sol(line) {
    sort(line);
    let answer = firstSubject(line);
    return answer;
}

function firstSubject(line) {
    let clearQue = [];
    let playingQue = [];
    //console.log(line.length);
    for(let i=0;i<line.length-1;i++) {
        //console.log(compareTime(line[i],line[i+1]));
        if(compareTime(line[i],line[i+1])){
            if(i == line.length-2){
            console.log(`21: clearQue`);
                clearQue.push(line[i]);
                clearQue.push(line[i+1]);
            } else {
                clearQue.push(line[i]);
            }
        } else {
            if(i == line.length-2){
            console.log(`21: playingQue`);
                playingQue.push(line[i]);
                clearQue.push(line[i+1]);
            } else {
                playingQue.push(line[i]);
            }
        }
    }
    if(playingQue.length > 0){
        for(let i of playingQue){
            clearQue.push(i);
        }
    }
    return clearQue;
}

function compareTime(line1, line2) {
    let line1Hour = parseInt(line1[1].split(":")[0]);
    let minute = line1[1].split(":")[1] == "00"? "0": line1[1].split(":")[1];
    let line1Minute = parseInt(minute);
    
    line1Minute = line1Minute + parseInt(line1[2]);
    if(line1Minute >= 60) {
        line1Hour++;
        line1Minute -= 60;
    }
    line1time = line1Hour + ":" + line1Minute;
    //console.log(`line1:${line1time}  line2:${line2[1]}`);
    if(compareMin(line1time, line2[1])) {
        return true;
    }
    return false;
}

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

function compareMin(line1,line2) {
    let comp1 = line1[1].split(":");
    let comp2 = line2[1].split(":");
    if(comp1[0] < comp2[0]){
        return true
    } else if(comp1[0] == comp2[0]){
        if(comp1[1] <= comp2[1]){
            return true
        }
        return false
    } else {
        return false
    }
}
//code end

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
