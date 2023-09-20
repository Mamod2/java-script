let currentDate= new Date()
let currentDay= currentDate.getDay()
let DayOfMonth = currentDate.getDate()
let CurrentMonth = currentDate.getMonth()
let CurrentYear= currentDate.getFullYear()

switch (currentDay) {
    case 0:
        currentDay="Sunday"
        break;
    case 1:
        currentDay="Monday"
        break;
    case 2:
        currentDay="Tuesday"
        break;
    case 3:
        currentDay="Wednesday"
        break;
    case 4:
        currentDay="Thursday"
        break;
    case 5:
        currentDay="Friday"
        break;
    case 6:
        currentDay="Saturday"
        break;

        default:
        currentDay="Day not found";
        break;
}

switch (CurrentMonth) {
    case 0:
        CurrentMonth="January"
        break;
    case 1:
        CurrentMonth="February"
        break;
    case 2:
        CurrentMonth="March"
        break;
    case 3:
        CurrentMonth="April"
        break;
    case 4:
        CurrentMonth="may"
        break;
    case 5:
        CurrentMonth="june"
        break;
    case 6:
        CurrentMonth="july"
        break;
     case 7:
        CurrentMonth="august"
        break;
        case 8:
        CurrentMonth="september"
        break;
        case 9:
        CurrentMonth="october"
        break;
        case 10:
        CurrentMonth="november"
        break;
        case 11:
        CurrentMonth="december"
        break;




        default:
            CurrentMonth="Month not found";
            break;
}

    console.log(`Today is ${currentDay} the ${DayOfMonth} of ${CurrentMonth} ${CurrentYear}` );
 


