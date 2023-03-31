package com.ssafy.sonmogaji.model.entity.room;


import lombok.*;

import java.time.LocalDate;
import java.util.*;

@Getter
@Setter
public class MemorandumState {
    private List<Map<String,Boolean>> agree=new ArrayList<>();
//    private List<HashMap<String,Boolean>> agree;
    private String title;
    private String content;
    private boolean secret;
    private LocalDate expire;
    private String memoryImage;
    private boolean memorySecret;

    private String memorandumPreview; //프리뷰 이미지
//
    public MemorandumState(){

        this.title = "";
        this.content = "";
        this.secret = false;
        this.expire = LocalDate.now();
        this.memoryImage = "";
        this.memorySecret = false;
        this.memorandumPreview="";

    }

}
