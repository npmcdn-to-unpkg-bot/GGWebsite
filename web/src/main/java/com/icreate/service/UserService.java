package com.icreate.service;

import java.util.List;

import com.icreate.entity.User;

/**
 * 
 *
 * @version ： 1.0
 * 
 * @author ： 苏若年 <a href="mailto:DennisIT@163.com">发送邮件</a>
 * 
 * @since ： 1.0 创建时间: 2013-4-9 下午03:52:07
 * 
 * 		@function： TODO
 *
 */
public interface UserService {

	public int insert(User user);

	public int update(User user);

	public int delete(String userName);

	public List<User> selectAll();

	public int countAll();

	public User findByUserName(String userName);
}