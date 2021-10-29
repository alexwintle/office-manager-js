class MeetingRoom {
    constructor(roomName = undefined) {
        this.roomName = roomName
        this.available = true
    }

    enterRoom() {
        if (!this.available) {
            throw new Error("This room is already in use");
        }
        return this.available = false;
    }

    leaveRoom() {
        return this.available = true;
    }

}