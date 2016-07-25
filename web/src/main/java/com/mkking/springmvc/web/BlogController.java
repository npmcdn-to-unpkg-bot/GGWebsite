package com.mkking.springmvc.web;

import java.io.PrintWriter;
import java.net.URLDecoder;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.icreate.entity.Article;
import com.icreate.entity.ArticleWithBLOBs;
import com.icreate.entity.User;
import com.icreate.service.ArticleService;
import com.icreate.service.UserService;
import com.mkking.springmvc.service.HelloService;

@Controller
public class BlogController {

	// @Autowired
	// private UserService userService = null;
	private HelloService helloService;

	@Autowired
	private UserService userService = null;

	@Autowired
	private ArticleService articleService = null;

	// 在控制器中注入HelloService类
	@Autowired
	public BlogController(HelloService helloService) {
		this.helloService = helloService;
	}

	@RequestMapping(value = "/Page", method = RequestMethod.GET)
	@ResponseBody
	public void WeChart(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String reult = "测试";

		response.setContentType("charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setHeader("Content-type", "text/html;charset=UTF-8");

		Short start = Short.valueOf(request.getParameter("start")), end = Short.valueOf(request.getParameter("end"));
		List<ArticleWithBLOBs> li = articleService.selectByPage(start, end);

		JSONObject jsonObj = new JSONObject("{}");
		for (ArticleWithBLOBs i : li) {
			Map<String, String> item = new HashMap<String, String>();
			item.put("content", i.getArticleContent());
			item.put("summary", i.getArticleSummary());
			item.put("title", i.getArticleName());
			item.put("type", "Text");
			jsonObj.put(i.getArticleId().toString(), item);
		}
		reult = jsonObj.toString();

		PrintWriter out = response.getWriter();

		// reult = URLDecoder.decode(reult, "utf-8");
		out.print(reult);

		out.flush();
		out.close();

	}

	@RequestMapping(value = "/Login", method = RequestMethod.POST)
	@ResponseBody
	public String Login(HttpServletRequest request, HttpServletResponse response) throws Exception {

		String reult = "测试";
		Map<String, String[]> params = request.getParameterMap();

		List<User> li = userService.selectByUser(params.get("user")[0].toString());
		if (li.get(0).getUserPwd() == params.get("password")[0]) {
			reult = li.get(0).getUserId().toString();
		}
		return reult;

	}

	@RequestMapping(value = "/Register", method = RequestMethod.POST)
	@ResponseBody
	public void Register(HttpServletRequest request, HttpServletResponse response) throws Exception {
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:63342");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setHeader("Access-Control-Allow-Methods", "POST");
		PrintWriter out = response.getWriter();
		String reult = "";
		Map<String, String[]> params = request.getParameterMap();
		User user = new User();
		user.setGroupId(1);
		// user.setUserId(1);
		user.setUserName(params.get("user")[0].toString());
		user.setUserPwd(params.get("password")[0].toString());
		// user.setUserId(userId);
		int re = userService.insert(user);
		reult = String.valueOf(user.getUserId());
		out.print(reult);

	}

	@RequestMapping(value = "/InsertBlog", method = RequestMethod.POST)
	@ResponseBody
	public void InsertBlog(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PrintWriter out = response.getWriter();
		String reult = "";
		Map<String, String[]> params = request.getParameterMap();
		String title = params.get("title")[0].toString();
		String content = params.get("content")[0].toString();

		String summary = content.length() > 100 ? content.substring(0, 100) + "....." : content;
		ArticleWithBLOBs article = new ArticleWithBLOBs();

		// Short i = 2;
		// article.setArticleId(i);
		int time = (int) new Date().getTime();
		byte up = 0;
		// Short id = 2;
		// article.setArticleId(id);
		article.setArticleClick(0);
		article.setArticleIp("123");
		article.setArticleName(title);
		article.setArticleTime(345);
		article.setArticleUp(up);
		article.setArticleContent(content);
		article.setArticleSummary(summary);
		article.setUserId(1);
		article.setSortArticleId(2);
		articleService.insert(article);

		reult = String.valueOf(article.getArticleId());

		out.print(reult);

	}

	@RequestMapping(value = "/GetBlogById", method = RequestMethod.POST)
	@ResponseBody
	public void GetBlog(HttpServletRequest request, HttpServletResponse response) throws Exception {

		response.setContentType("charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setHeader("Content-type", "text/html;charset=UTF-8");
		String reult = "";
		Map<String, String[]> params = request.getParameterMap();
		String id = params.get("ArticleId")[0].toString();

		Short idS = Short.valueOf(id);

		ArticleWithBLOBs article = articleService.selectByPrimaryKey(idS);

		JSONObject jsonObj = new JSONObject("{}");
		Map<String, String> item = new HashMap<String, String>();
		item.put("content", article.getArticleContent());
		item.put("title", article.getArticleName());
		item.put("type", "Text");
		jsonObj.put("article", item);

		reult = jsonObj.toString();

		PrintWriter out = response.getWriter();

		// reult = URLDecoder.decode(reult, "utf-8");
		out.print(reult);

		out.flush();
		out.close();

	}

}
