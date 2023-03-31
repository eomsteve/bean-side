package com.study.beanside.model.service.room;

import com.study.beanside.model.dto.RoomResponseDto;

public interface RoomService {


    // 방 참가 가능한지
    public RoomResponseDto isAvail(String roomId);


    public RoomResponseDto create( String senderNickname);
}
