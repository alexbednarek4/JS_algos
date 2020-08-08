/**
 * First, we sort our input array of meetings by start time so any meetings that might need to be merged are now next to each other.

Then we walk through our sorted meetings from left to right. At each step, either:

1.) We can merge the current meeting with the previous one, so we do.
2.) We can't merge the current meeting with the previous one, so we know 
    the previous meeting can't be merged with any future meetings and we throw the current meeting into mergedMeetings.
 */
/**
 * 
 * @param {[
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]} 
 */
 const mergeRanges = (meetings) => {
    
    // Create a deep copy of meetings array
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));

    // Sort by start time
    const sortedMeetings = meetings.sort((a, b)=> {
        return a.startTime - b.startTime
    })
    console.log('sorted meetings: ', sortedMeetings)
    // Initialize merged meetings with sorted meetings
    const mergedMeetings = [sortedMeetings[0]]
    for(let i = 0; i<sortedMeetings.length; i+=1) {
        const currentMeeting = sortedMeetings[i];
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // if current meeting overlaps with last two meetings, use later end time of the two
        if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
        }else{
        // Add current meeting since it does NOT overlap
        mergedMeetings.push(currentMeeting)
        }
    }
    return mergedMeetings;
 }

 console.log(mergeRanges(  [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]))