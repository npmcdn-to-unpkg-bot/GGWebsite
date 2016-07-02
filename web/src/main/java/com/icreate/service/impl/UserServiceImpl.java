package com.icreate.service.impl;

import java.util.List;

import com.icreate.dao.UserDao;
import com.icreate.entity.User;
import com.icreate.service.UserService;

/**
 * 
 *
 * @version ： 1.0
 * 
 * @author ： 苏若年 <a href="mailto:DennisIT@163.com">发送邮件</a>
 * 
 * @since ： 1.0 创建时间: 2013-4-9 下午03:53:26
 * 
 * 		@function： TODO
 *
 */
public class UserServiceImpl implements UserService {

	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public int countAll() {
		return this.userDao.countAll();
	}

	public int delete(String userName) {
		return this.userDao.delete(userName);
	}

	public User findByUserName(String userName) {
		return this.userDao.findByUserName(userName);
	}

	public int insert(User user) {
		return this.userDao.insert(user);
	}

	public List<User> selectAll() {
		return this.userDao.selectAll();
	}

	public int update(User user) {
		return this.userDao.update(user);
	}

}