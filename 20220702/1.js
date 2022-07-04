function solution(dartResult) {
    let krr = dartResult.split(/[0-9]/).filter(t=>t!=='');
    let arr = dartResult.split(/[^0-9]/).filter(t=>t!=='').map(t => Number(t));
    let total = 0;
    let point = 0;
    let prePoint = 0;

    for(let i=0; i<3; i++){
        if(krr[i].charAt(0) === 'S'){
            point = arr[i];
        }else if( krr[i].charAt(0) === 'D'){
            point = arr[i] **2;
        }else {
            point = arr[i] **3;
        }
        
        if(krr[i].charAt(1) === '*'){
            total = total + point*2 + prePoint;
            prePoint = point*2;

        }else if(krr[i].charAt(1) === '#'){
            total = total - point;
            prePoint = point*-1;
        }else{
            total += point;
            prePoint = point;
        }
        
        
    }
    return total;
}