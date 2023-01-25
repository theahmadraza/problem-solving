function timeConversion(str){
    let time = str.split(":") 
    let hour = parseInt(time[0])
    let min = time[1]
    let sec = time[2].slice(0,2)
    let timeFrame = time[2].slice(2)
    if(timeFrame === 'PM' && hour !== 12){
        hour += 12; 
    }
    if(hour === 12 && timeFrame === 'AM'){
        hour = '00'
    }
    else if(hour < 10){
        hour = '0' + hour.toString()
    }
    else{
        hour = hour.toString()
    }

    console.log([hour, time[1], sec].join(":"))
}

let string = "6:20:30AM"

timeConversion(string)