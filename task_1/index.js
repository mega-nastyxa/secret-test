import {encoded, translations} from './data.js'

console.log("Let's rock")
// console.log(encoded, translations)




function decodeFields(encoded, translations) {
    let decoded = [];
    let uniqueIds = {};
  
    for (let i = 0; i < encoded.length; i++) {
      let decodedObj = {};
  
      for (let key in encoded[i]) {
        if (key.endsWith("Id") && !["groupId", "service", "formatSize", "ca"].includes(key)) {
          let value = encoded[i][key];
  
          if (translations[value]) {
            decodedObj[key] = translations[value];
            uniqueIds[value] = true;
          } else {
            decodedObj[key] = value;
          }
        } 
        
        else {
          decodedObj[key] = encoded[i][key];
        }
      }
      decoded.push(decodedObj);
    }
  
    let uniqueIdList = Object.keys(uniqueIds);
    return { decoded, uniqueIdList };
  }
  
  const { decoded, uniqueIdList } = decodeFields(encoded, translations);
  
  console.log(decoded);
  console.log(uniqueIdList);
