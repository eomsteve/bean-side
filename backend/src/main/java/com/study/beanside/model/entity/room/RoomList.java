package com.ssafy.sonmogaji.model.entity.room;

import lombok.Getter;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Component
@Getter
@Log4j2
public class RoomList {

    private static final List<Room> roomList = new LinkedList<>();

    public RoomList() {
//        roomList.add(new Room("testroom"));
    }

    public List<Room> getRoomList() {
        return this.roomList;
    }

    public Room findRoomByHostId(String hostSessionId) {
        for (int i = 0; i < this.roomList.size(); i++) {
            if (this.roomList.get(i).getHostSessionId().equals(hostSessionId)) {
                return this.roomList.get(i);
            }
        }
        return null;
    }


    public Room findRoomByRoomCode(String roomCode) {
        for (int i = 0; i < this.roomList.size(); i++) {
            if (this.roomList.get(i).getRoomCode().equals(roomCode)) {
                return this.roomList.get(i);
            }
        }
        return null;
    }




    public boolean deleteRoom(String roomId) {
        for (int i = 0; i < this.getRoomList().size(); i++) {
            if (this.getRoomList().get(i).getHostSessionId().equals(roomId)) {
                this.getRoomList().remove(i);
                return true;
            }
        }
        return false;
    }

    public boolean deleteRoom(Room room) {
        return this.getRoomList().remove(room);
    }

}
