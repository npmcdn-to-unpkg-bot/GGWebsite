package com.icreate.entity;

public class Locate {
    private Integer id;

    private Long userid;

    private String title;

    private String icon;

    private Long flag;

    private String remark;

    private byte[] ogcGeom;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon == null ? null : icon.trim();
    }

    public Long getFlag() {
        return flag;
    }

    public void setFlag(Long flag) {
        this.flag = flag;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public byte[] getOgcGeom() {
        return ogcGeom;
    }

    public void setOgcGeom(byte[] ogcGeom) {
        this.ogcGeom = ogcGeom;
    }
}