package com.ssafy.sonmogaji.model.entity.room;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

@Log4j2
@Getter
@Setter
@RequiredArgsConstructor
public class Room {

    private String hostSessionId; //방장 sessionId 와 동일
    private String roomCode;
    private boolean isStart;


    public Room(String nickname) {
        this.hostSessionId = "";
        this.isStart = false;


        Random rd = new Random();
        for (int i = 0; i < 6; i++) {
            this.roomCode += rd.nextInt(9);
        }
        log.info("room created : " + this.roomCode);
        //roomcode 랜덤 6자리

    }

    public Room(String nickname, String hostSessionId) {
        this.hostSessionId = hostSessionId;
        this.isStart = false;
        this.roomCode = "";
        Random rd = new Random();
        for (int i = 0; i < 6; i++) {
            this.roomCode += rd.nextInt(9);
        }
        log.info("room created : " + this.roomCode);

    }


    @PostConstruct
    private void init() {

        isStart = false;
        hostSessionId = "";

    }




    public boolean startRoom(String senderSessionId) {
        if(this.getHostSessionId().equals(senderSessionId)){
            this.isStart = true;
            return true;
        }

        return false;
    }


}
