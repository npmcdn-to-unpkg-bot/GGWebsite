package com.icreate.service.impl;

import com.icreate.dao.UserCommentMapper;
import com.icreate.entity.UserComment;
import com.icreate.service.UserCommentService;

public class UserCommentServiceImpl implements UserCommentService {

	private UserCommentMapper userCommentMapper;

	public int deleteByPrimaryKey(Integer cId) {
		return this.userCommentMapper.deleteByPrimaryKey(cId);
	}

	public int insert(UserComment record) {
		return this.userCommentMapper.insert(record);
	}

	public int insertSelective(UserComment record) {
		return this.userCommentMapper.insertSelective(record);
	}

	public UserComment selectByPrimaryKey(Integer cId) {
		return this.userCommentMapper.selectByPrimaryKey(cId);
	}

	public int updateByPrimaryKeySelective(UserComment record) {
		return this.userCommentMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(UserComment record) {
		return this.userCommentMapper.updateByPrimaryKey(record);
	}

	public UserCommentMapper getUserCommentMapper() {
		return userCommentMapper;
	}

	public void setUserCommentMapper(UserCommentMapper userCommentMapper) {
		this.userCommentMapper = userCommentMapper;
	}

}
