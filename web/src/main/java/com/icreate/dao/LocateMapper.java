package com.icreate.dao;

import org.apache.ibatis.annotations.Param;

import com.icreate.entity.Locate;

public interface LocateMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Locate record);

    int insertSelective(Locate record);

    Locate selectByPrimaryKey(Integer id);
    
    Locate selectNewData();

    int updateByPrimaryKeySelective(Locate record);

    int updateByPrimaryKeyWithBLOBs(Locate record);

    int updateByPrimaryKey(Locate record);
    
    int insertFromWkt(
    		@Param("userid") long userid,
    		@Param("title") String title,
    		@Param("icon") String icon,
    		@Param("flag") long flag,
    		@Param("remark") String remark,
    		@Param("wkt") String wkt);
}