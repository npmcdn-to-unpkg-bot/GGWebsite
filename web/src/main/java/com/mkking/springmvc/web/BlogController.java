package com.mkking.springmvc.web;

import java.io.File;
import java.io.PrintWriter;
import java.nio.ByteBuffer;
import java.text.SimpleDateFormat;
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

import com.icreate.entity.ArticleWithBLOBs;
import com.icreate.entity.User;
import com.icreate.service.ArticleService;
import com.icreate.service.LocateService;
import com.icreate.service.UserService;
import com.mkking.springmvc.service.HelloService;
import com.mkking.springmvc.util.FileReader;

@Controller
public class BlogController {

	// @Autowired
	// private UserService userService = null;
	private HelloService helloService;

	@Autowired
	private UserService userService = null;

	@Autowired
	private ArticleService articleService = null;

	@Autowired
	private LocateService locateService = null;

	// 在控制器中注入HelloService类
	@Autowired
	public BlogController(HelloService helloService) {
		this.helloService = helloService;
	}

	@RequestMapping(value = "/Page", method = RequestMethod.GET)
	@ResponseBody
	public void GetBlogByPage(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String reult = "测试", partPath = "resource/picture/";

		FileReader fr = new FileReader();
		String path = request.getSession().getServletContext().getRealPath("");
		path += "/" + partPath;

		System.out.println(path);

		File root = new File(path);
		String url = request.getContextPath();
		String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + url
				+ "/";
		basePath += partPath;

		response.setContentType("charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setHeader("Content-type", "text/html;charset=UTF-8");

		Short start = Short.valueOf(request.getParameter("start")), end = Short.valueOf(request.getParameter("end"));
		List<ArticleWithBLOBs> li = articleService.selectByPage(start, end);
		JSONObject jsonObj = new JSONObject("{}");
		// 判断第一页的时候有图喔
		if (Short.valueOf(request.getParameter("start")) == 0) {
			Map<String, Object> img = fr.showAllFiles(root, basePath);
			jsonObj.put("img", img);
		}

		for (ArticleWithBLOBs i : li) {
			Map<String, String> item = new HashMap<String, String>();
			item.put("id", i.getArticleId().toString());
			item.put("content", i.getArticleContent());
			item.put("summary", i.getArticleSummary());
			item.put("time", i.getArticleTime().toString());
			item.put("title", i.getArticleName());
			item.put("sort", i.getSortArticleId().toString());
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

	@RequestMapping(value = "/Locate", method = RequestMethod.GET)
	@ResponseBody
	public void Locate(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String userIdStr = request.getParameter("userid"), lat = request.getParameter("lat"),
				lng = request.getParameter("lng");
		long userId = Long.parseLong(userIdStr), flag = 1;
		Date d = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String dateNowStr = sdf.format(d);
		String title = dateNowStr, locateModel = "POINT (%s %s)";
		String location = String.format(locateModel, lng, lat);
		locateService.insertFromWkt(userId, title, "f", flag, title, location);

		PrintWriter out = response.getWriter();
		String reult = "succeed";

		out.print(reult);

	}

	@RequestMapping(value = "/GetLocate", method = RequestMethod.GET)
	@ResponseBody
	public void GetLocate(HttpServletRequest request, HttpServletResponse response) throws Exception {

		com.icreate.entity.Locate locate = locateService.selectNewData();

		double[] t = helloService.convertToEntityAttribute(locate.getOgcGeom());
		PrintWriter out = response.getWriter();
		String reult = "succeed";

		JSONObject jsonObj = new JSONObject("{}");
		Map<String, String> item = new HashMap<String, String>();
		item.put("lat", String.valueOf(t[1]));
		item.put("lng", String.valueOf(t[0]));
		item.put("userid", "1");
		jsonObj.put("locate", item);

		reult = jsonObj.toString();

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
		String classname = params.get("class")[0].toString();

		String summary = content.length() > 100 ? content.substring(0, 100) + "....." : content;
		ArticleWithBLOBs article = new ArticleWithBLOBs();

		Long timeLong = new Date().getTime();
		String timeStr = timeLong.toString();
		int time = Integer.parseInt(timeStr.substring(0, 8));
		byte up = 0;
		// Short id = 2;
		// article.setArticleId(id);
		article.setArticleClick(0);
		article.setArticleIp("null");
		article.setArticleName(title);
		article.setArticleTime(time);
		article.setArticleUp(up);
		article.setArticleContent(content);
		article.setArticleSummary(summary);
		article.setUserId(1);
		article.setSortArticleId(Integer.parseInt(classname));
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
		item.put("type", "Article");
		item.put("id", article.getArticleId().toString());
		jsonObj.put("article", item);

		reult = jsonObj.toString();

		PrintWriter out = response.getWriter();

		// reult = URLDecoder.decode(reult, "utf-8");
		out.print(reult);

		out.flush();
		out.close();

	}

}
