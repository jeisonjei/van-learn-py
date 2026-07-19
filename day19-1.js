daman = 15
console.log(daman)
myfunc = () => {console.log(daman)}
myfunc()

function doubleArrayItems(array) {
    let result = [];
    for (let item of array) {
        let doubled = item * 2;
        result.push(doubled);
    }
    console.log(`again a: ${a}`); // 1 - still seeing `a` from outer scope
    console.log(`doubled: ${doubled}`); // error: `doubled` is not defined
    return result;
}