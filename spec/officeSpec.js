

describe('office', () => {

    let office;
    let meetingRoomBatcave;
    let meetingRoomHeist;

    beforeEach(() => {
        office = new Office();
        meetingRoomBatcave = new MeetingRoom('Batcave');
        meetingRoomHeist = new MeetingRoom('Heist');
    });

    describe('constructor', () => {
        it('should initialize a variable meetings which is an array', () => {
            expect(office.meetingRoomList).toEqual([]);
        });

        it('should initialize a variable meetingRoom which contains the name of the of the meeting room (this case its Heist)',() => {
            expect(office.meetingRoom.roomName).toEqual('Heist');
        });


    });

    describe('meetings',() => {
        it('should return an array of all the meetingRooms', () => {
            office.addMeetingRoom(meetingRoomBatcave);
            office.addMeetingRoom(meetingRoomHeist);
            expect(office.meetings()).toEqual([meetingRoomBatcave, meetingRoomHeist]);
            expect(office.meetings()).toEqual(office.meetingRoomList);
        });
    });

    describe('meetingRoomNames',() => {
        it('should return an array of all the names of meetings', () => {
            office.addMeetingRoom(meetingRoomBatcave);
            office.addMeetingRoom(meetingRoomHeist);
            expect(office.meetingRoomNames()).toEqual(['Batcave', 'Heist']);
        });
    });

    describe('meetingRoomNames',() => {
        it('should return an array of the meetingRoom availability status', () => {
            office.addMeetingRoom(meetingRoomBatcave);
            office.addMeetingRoom(meetingRoomHeist);
            expect(office.meetingRoomsAvailableStatus()).toEqual([true, true]);
        });
    });

    describe('addMeetingRoom', () => {
        it('should add a meetingRoom to the meetingRoomList', () => {
            office.addMeetingRoom(meetingRoomBatcave);
            expect(office.addMeetingRoom(meetingRoomHeist)).toEqual([meetingRoomBatcave, meetingRoomHeist]);
        });
    });

    describe('availableMeetingRooms', () => {
        it('should return all of the available meeting rooms', () => {
            office.addMeetingRoom(meetingRoomBatcave);
            office.addMeetingRoom(meetingRoomHeist);
            expect(office.availableMeetingRooms(office.meetingRoomList)).toEqual([meetingRoomBatcave, meetingRoomHeist]);

            meetingRoomBatcave.enterRoom();
            expect(office.availableMeetingRooms(office.meetingRoomList)).toEqual([meetingRoomHeist]);

        });
    });

});




