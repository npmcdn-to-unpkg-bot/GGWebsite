package com.icreate.service;

import com.icreate.entity.MsgData;

public interface MsgDataService {
	int deleteByPrimaryKey(Integer id);

	int insert(MsgData record);

	int insertSelective(MsgData record);

	MsgData selectByPrimaryKey(Integer id);

	int updateByPrimaryKeySelective(MsgData record);

	int updateByPrimaryKey(MsgData record);
}
