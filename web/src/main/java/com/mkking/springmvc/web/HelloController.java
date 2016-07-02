package com.mkking.springmvc.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.icreate.service.UserService;
import com.mkking.springmvc.service.HelloService;
import com.mkking.springmvc.service.HelloServiceImpl;

//import cn.com.bean.PersonBean;
//import cn.com.service.PersonService;

@Controller
public class HelloController {

	private HelloService helloService;

	@Autowired
	private UserService userService = null;

	// 在控制器中注入HelloService类
	@Autowired
	public HelloController(HelloService helloService) {
		this.helloService = helloService;
	}

	@RequestMapping("/")
	public String homepage() {

		return "hello";

	}

	@RequestMapping("/Test")
	public @ResponseBody String tetpage() {
		return "dd" + userService.countAll();

	}

}