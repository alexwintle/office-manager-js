class Office {
    constructor(meetingRoom) {
        this.meetingRoom = meetingRoom
        this.meetingRoomList = [];
    }

    meetings() {
        console.log(this.meetingRoomList)
        return this.meetingRoomList;
    }

    meetingRoomNames() {
        return this.meetingRoomList['meetingRoom'][1]['roomName'];
    }

    meetingRoomsAvailableStatus() {
        return this.meetingRoomList['available'];
    }

    addMeetingRoom(meetingRoom) {
        this.meetingRoomList.push(meetingRoom);
        return this.meetingRoomList;
    }

    availableMeetingRooms(meetingRoomList) {
        if (meetingRoomList.meetingRoom.available === true) {
            return meetingRoomList
        }
    }
}