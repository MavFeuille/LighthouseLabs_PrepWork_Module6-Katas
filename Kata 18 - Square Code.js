const squareCode = (message) => {
  let output = "";
  
  // Remove spaces from original message
  message = message.replace(/\s/g, ""); 

  // Find out number of columes through the length of message
  let columns = Math.ceil(Math.sqrt(message.length));
}

console.log(squareCode("chill out"));