// For the given time slots in 0-24 hrs check if meetings are possible for the given time slots.
// Person can do only one meeting in one given slot.
/**
 * For exapmle [[0,2],[5,10],[2,5],[10,20]] are valid time slots and all the meetings are possible
 * But [[0,2],[5,10],[2,5],[9,20]] are not valid time slots as [5-10] and [9,20] will collide and person can't have two meetings at single point of time.
 */

meeting_times=[[0,2],[5,10],[2,5],[10,20]]
function check_if_meetings_are_possible(meeting_times){
    meeting_times = meeting_times.sort((a,b) => a[0] - b[0])
    console.log(meeting_times)
    let result = true
    for(let i=1; i<meeting_times.length; i++){
        if(!(meeting_times[i][0] > meeting_times[i-1][0]) || !(meeting_times[i][0] >= meeting_times[i-1][1])){
            result = false
            break;
        }
    }
    return result
}

console.log(check_if_meetings_are_possible(meeting_times))