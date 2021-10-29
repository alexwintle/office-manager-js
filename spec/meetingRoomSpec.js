describe('meetingRoom', () => {

    let meetingRoom;

    beforeEach(() => {
        meetingRoom = new MeetingRoom('Batcave');
    });


    describe('constructor', () => {
        it('should set roomName to Batcave', () => {
            expect(meetingRoom.roomName).toEqual('Batcave');
        });

        it('should set available to true by default', () => {
            expect(meetingRoom.available).toEqual(true);
        });

    });

    describe('enter', () => {
        it('should set available to false when a room is entered', () => {
            expect(meetingRoom.enterRoom()).toEqual(false);
        });

        it('should raise an error if the room is already in use', () => {
            meetingRoom.enterRoom();
            expect(function () {
                meetingRoom.enterRoom();
            }).toThrow(new Error("This room is already in use"));
        });

    });

    describe('leave', () => {
        it('should set available to true when called', () => {
            expect(meetingRoom.leaveRoom()).toEqual(true);
            expect(meetingRoom.available).toEqual(true);
        });
    });

});