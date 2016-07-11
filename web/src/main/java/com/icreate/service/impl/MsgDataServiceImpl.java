package com.icreate.service.impl;

import com.icreate.dao.MsgDataMapper;
import com.icreate.entity.MsgData;
import com.icreate.service.MsgDataService;

public class MsgDataServiceImpl implements MsgDataService {

	private MsgDataMapper msgDataMapper;

	public MsgDataMapper getMsgDataMapper() {
		return msgDataMapper;
	}

	public void setMsgDataMapper(MsgDataMapper msgDataMapper) {
		this.msgDataMapper = msgDataMapper;
	}

	public int deleteByPrimaryKey(Integer id) {
		return this.msgDataMapper.deleteByPrimaryKey(id);
	}

	public int insert(MsgData record) {
		return this.msgDataMapper.insert(record);
	}

	public int insertSelective(MsgData record) {
		return this.insertSelective(record);
	}

	public MsgData selectByPrimaryKey(Integer id) {
		return this.msgDataMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(MsgData record) {
		return this.msgDataMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(MsgData record) {
		return this.msgDataMapper.updateByPrimaryKey(record);
	}

}
