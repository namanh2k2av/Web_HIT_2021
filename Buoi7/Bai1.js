const check = (str) => {
    str = str.split('');
    dem = 0;
    str.forEach((val,index) => {
        if(str.indexOf(val) !== -1 && str.lastIndexOf(val) === str.indexOf(val))
            dem++;
        if(dem === 1)
            console.log(index);
    });
    if(dem === 0)
        console.log(-1);
}

console.log('---CASE1---');
console.log(check('tranduong'));

console.log('---CASE2---');
console.log(check('hitclubhiuhiu'));

console.log('---CASE3---');
console.log(check('aabb'));