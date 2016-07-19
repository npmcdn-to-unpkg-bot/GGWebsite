package com.icreate.service.impl;

import java.util.List;

import com.icreate.dao.UserMapper;
import com.icreate.entity.User;
import com.icreate.service.UserService;

public class UserServiceImpl implements UserService {

	private UserMapper userMapper;

	public UserMapper getUserMapper() {
		return userMapper;
	}

	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

	public int deleteByPrimaryKey(Integer userId) {
		return this.userMapper.deleteByPrimaryKey(userId);
	}

	public int insert(User record) {
		return this.userMapper.insert(record);
	}

	public int insertSelective(User record) {
		return this.userMapper.insertSelective(record);
	}

	public User selectByPrimaryKey(Integer userId) {
		return this.userMapper.selectByPrimaryKey(userId);
	}

	public int updateByPrimaryKeySelective(User record) {
		return this.userMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(User record) {
		return this.userMapper.updateByPrimaryKey(record);
	}

	public List<User> selectByUser(String userName) {
		return this.userMapper.selectByUser(userName);
	}

}