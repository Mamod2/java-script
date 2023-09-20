function tellfortune(jobtitle, location, partnername, numberofchildren) {
    const msg= ` You will be a ${jobtitle} in ${location} Married ${partnername} with ${numberofchildren} `
    return msg
}
const fortune= tellfortune ("programmer", "USa", "maria" ,"4 childrens")
console.log(fortune);
