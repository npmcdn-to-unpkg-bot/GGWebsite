package com.mkking.springmvc.util;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;

import com.icreate.entity.ArticleWithBLOBs;
import com.icreate.entity.UserComment;

public class BlogUtil {
	public String getArticle(ArticleWithBLOBs article) {
		String reult = "";
		List comment = article.getComment();
		Map<String, Map<String, String>> commentMap = new HashMap<String, Map<String, String>>();
		for (int i = 0; i < comment.size(); i++) {
			UserComment c = (UserComment) comment.get(i);
			Map<String, String> commentItem = new HashMap<String, String>();
			commentItem.put("username", c.getCommitUserName());
			commentItem.put("title", c.getCommitTitle());
			commentItem.put("content", c.getCommitContent());
			commentMap.put(String.valueOf(i), commentItem);
		}

		JSONObject jsonObj = new JSONObject("{}");
		Map<String, Object> item = new HashMap<String, Object>();
		item.put("content", article.getArticleContent());
		item.put("title", article.getArticleName());
		item.put("type", "Article");
		item.put("id", article.getArticleId().toString());
		item.put("comments", commentMap);
		jsonObj.put("article", item);

		reult = jsonObj.toString();
		return reult;
	}
}
