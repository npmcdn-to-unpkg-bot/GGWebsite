package com.icreate.entity;

public class UserComment {
    private Integer cId;

    private Integer commitId;

    private String commitTitle;

    private String commitContent;

    private Integer commitUserId;

    private String commitUserName;

    private Integer commitTime;

    private String commitIp;

    public Integer getcId() {
        return cId;
    }

    public void setcId(Integer cId) {
        this.cId = cId;
    }

    public Integer getCommitId() {
        return commitId;
    }

    public void setCommitId(Integer commitId) {
        this.commitId = commitId;
    }

    public String getCommitTitle() {
        return commitTitle;
    }

    public void setCommitTitle(String commitTitle) {
        this.commitTitle = commitTitle == null ? null : commitTitle.trim();
    }

    public String getCommitContent() {
        return commitContent;
    }

    public void setCommitContent(String commitContent) {
        this.commitContent = commitContent == null ? null : commitContent.trim();
    }

    public Integer getCommitUserId() {
        return commitUserId;
    }

    public void setCommitUserId(Integer commitUserId) {
        this.commitUserId = commitUserId;
    }

    public String getCommitUserName() {
        return commitUserName;
    }

    public void setCommitUserName(String commitUserName) {
        this.commitUserName = commitUserName == null ? null : commitUserName.trim();
    }

    public Integer getCommitTime() {
        return commitTime;
    }

    public void setCommitTime(Integer commitTime) {
        this.commitTime = commitTime;
    }

    public String getCommitIp() {
        return commitIp;
    }

    public void setCommitIp(String commitIp) {
        this.commitIp = commitIp == null ? null : commitIp.trim();
    }
}