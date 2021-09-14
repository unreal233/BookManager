/*
将输入的数组按照key值包装成json格式的数组
例: 输入key = 'id', array = [1001, 1002, 1003]
    返回：[{id: 1001}, {id: 1002}, {id: 1003}]

*/
export default function arrayToJSON(key, array){
    const toJSON = []
    for(let i of array){
        const JSONstr = `{"${key}": "${i}"}`
        toJSON.push(JSON.parse(JSONstr))
    }
    return toJSON
}