package com.icreate.service;

import java.util.List;

import com.icreate.entity.User;

public interface UserService {

	public int deleteByPrimaryKey(Integer userId);

	public int insert(User record);

	public int insertSelective(User record);

	public User selectByPrimaryKey(Integer userId);

	public int updateByPrimaryKeySelective(User record);

	public int updateByPrimaryKey(User record);

	public List<User> selectByUser(String userName);
}