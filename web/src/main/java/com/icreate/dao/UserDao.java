package com.icreate.dao;

import java.util.List;

import com.icreate.entity.User;

/**
 * 
 *
 * @version ： 1.0
 * 
 * @author ： 苏若年 <a href="mailto:DennisIT@163.com">发送邮件</a>
 * 
 * @since ： 1.0 创建时间: 2013-4-9 上午11:36:34
 * 
 * 		@function： TODO
 *
 */
public interface UserDao {

	public int insert(User user);

	public int update(User user);

	public int delete(String userName);

	public List<User> selectAll();

	public int countAll();

	public User findByUserName(String userName);

}