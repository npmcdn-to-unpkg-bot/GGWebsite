package com.mkking.springmvc.web;

import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.catalina.SessionListener;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;

import com.icreate.service.UserService;
import com.mkking.springmvc.service.CheckIt;
import com.mkking.springmvc.service.HelloService;
import com.mkking.springmvc.service.WeMsgFactory;
import com.mkking.springmvc.service.wcmod.BaseData;

//import cn.com.bean.PersonBean;
//import cn.com.service.PersonService;

@Controller
public class HelloController {

	private HelloService helloService;

	private CheckIt checkIt;
	private WeMsgFactory wmf;

	@Autowired
	private UserService userService = null;

	// 在控制器中注入HelloService类
	@Autowired
	public HelloController(HelloService helloService, CheckIt ck, WeMsgFactory wmf) {
		this.helloService = helloService;
		this.checkIt = ck;
		this.wmf = wmf;
	}

	@RequestMapping("/cc")
	public String cc() {

		return "index";

	}
	@RequestMapping("/we")
	public String we() {

		return "wechart";

	}
	@RequestMapping("/getSignature")
	@ResponseBody
	public String getSignature(HttpServletRequest request, HttpServletResponse response) {
		String nonce = request.getParameter("nonce"), timestamp = request.getParameter("timestamp"), url = request.getParameter("url");
		
		return checkIt.getSignature(timestamp, nonce, url);
	}

	@RequestMapping("/gb")
	public @ResponseBody void tetpage(HttpServletRequest request, HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = null;
		out = response.getWriter();
		out.print("中文");
		out.print("中文".getBytes());
		out.print("中文".getBytes("GB2312"));
		out.print("中文".getBytes("UTF-8"));
		out.print("中文".getBytes("GBK"));
		out.print("中文".getBytes("ISO8859_1"));
		out.print(new String("中文".getBytes()));
		out.print(new String("中文".getBytes(), "GB2312"));
		out.print(new String("中文".getBytes(), "ISO8859_1"));
		out.print(new String("中文".getBytes("GB2312")));
		out.print(new String("中文".getBytes("GB2312"), "UTF-8"));
		out.print(new String("中文".getBytes("UTF-8"), "GB2312"));
		out.print(new String("中文".getBytes("GB2312"), "GB2312"));
		out.print(new String("中文".getBytes("GB2312"), "ISO8859_1"));
		out.print(new String("中文".getBytes("ISO8859_1")));
		out.print(new String("中文".getBytes("ISO8859_1"), "GB2312"));
		out.print(new String("中文".getBytes("ISO8859_1"), "ISO8859_1"));
		out.flush();
		out.close();
	}

	@RequestMapping(value = "test", method = RequestMethod.GET)
	@ResponseBody
	public String post(@RequestBody String requestBody) {
		return "中文";
	}

	@RequestMapping(value = "/WeChart", method = RequestMethod.GET)
	@ResponseBody
	public void CheckWeChart(HttpServletRequest request, HttpServletResponse response) throws Exception {
		wmf.getLog().info("MSG in CheckWeChart..........................");
		String reult = "";
		PrintWriter out = null;
		out = response.getWriter();
		String signature = request.getParameter("signature"), timestamp = request.getParameter("timestamp"),
				nonce = request.getParameter("nonce"), echostr = request.getParameter("echostr");
		if (signature != null)
			reult = checkIt.getSK(signature, timestamp, nonce, echostr);
		out.print(reult);
		out.flush();
		out.close();
	}

	@RequestMapping(value = "/WeChart", method = RequestMethod.POST)
	@ResponseBody
	public void WeChart(HttpServletRequest request, HttpServletResponse response) throws Exception {
		wmf.getLog().info("MSG in WeChart..........................");
		response.setContentType("charset=UTF-8");
		response.setHeader("Content-type", "text/html;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = null;
		out = response.getWriter();
		String reult = "";
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		DocumentBuilder db = dbf.newDocumentBuilder();
		try {
			Document doc = db.parse(request.getInputStream());
			BaseData msgMod = wmf.msgRead(doc);
			String msgStr = wmf.msgSend(msgMod);
			reult = msgStr;
		} catch (Exception e) {
			reult = URLEncoder.encode("今天天气不好", "utf-8");
		}

		reult = URLDecoder.decode(reult, "utf-8");
		out.print(reult);

		out.flush();
		out.close();

	}

}