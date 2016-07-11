package com.icreate.entity;

public class MsgData {
    private Integer id;

    private String user;

    private String comemsg;

    private String remsg;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user == null ? null : user.trim();
    }

    public String getComemsg() {
        return comemsg;
    }

    public void setComemsg(String comemsg) {
        this.comemsg = comemsg == null ? null : comemsg.trim();
    }

    public String getRemsg() {
        return remsg;
    }

    public void setRemsg(String remsg) {
        this.remsg = remsg == null ? null : remsg.trim();
    }
}