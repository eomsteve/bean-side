package com.ssafy.sonmogaji.model.entity.room;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemorandumAction {
    private String roomCode;
    private String senderNickName;
    private String senderSocketId;
    private String message;
    private String title;
    private String content;
    private String action;
    private LocalDate expire;
    private boolean secret;
    private boolean memorySecret;
    private String memoryImage;
    private MemorandumState memorandumState;
//	private String type;

}