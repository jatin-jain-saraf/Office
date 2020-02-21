const convertToRs = (dollar) => {
        if (typeof dollar === 'number') {
            return dollar * 64
        } else {
            throw Error ('Amount needs to be in number')
        }
  
}

// program get chrases at a time when it encounter with error and other lines after error not run
try {
    const myValues = convertToRs('five')
console.log(myValues);
} catch (error) {
    console.log(error);
}

console.log('i will not run if program crashes');