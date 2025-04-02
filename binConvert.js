const nameToBinary = (name) =>{
    const split = name.split('')

    const asciiName = split.map((arr)=>{
        return arr.charCodeAt(0)
    })
    const binaryName = asciiName.map((arr)=>{
        return arr.toString(2)
    })
// return binaryName
return binaryName.join(' ');
}
console.log(nameToBinary('ryandhal'));
