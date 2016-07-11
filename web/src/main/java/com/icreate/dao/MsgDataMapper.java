package com.icreate.dao;

import com.icreate.entity.MsgData;

public interface MsgDataMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MsgData record);

    int insertSelective(MsgData record);

    MsgData selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MsgData record);

    int updateByPrimaryKey(MsgData record);
}