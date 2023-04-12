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
