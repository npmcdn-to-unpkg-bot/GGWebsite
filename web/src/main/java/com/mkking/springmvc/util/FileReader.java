package com.mkking.springmvc.util;

import java.io.File;
import java.util.HashMap;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONObject;

public class FileReader {

	public Map showAllFiles(File dir, String url) {
		File[] fs = dir.listFiles();
		JSONObject jsonObj = new JSONObject("{}");
		Map<String, Object> item = new HashMap<String, Object>();
		Map<String, Map> li = new HashMap<String, Map>();

		item.put("type", "Img");

		// reult = jsonObj.toString();
		for (int i = 0; i < fs.length; i++) {
			Map<String, String> imgItem = new HashMap<String, String>();
			System.out.println(fs[i].getAbsolutePath());
			String name = getName(fs[i].getAbsolutePath());
			if (name == null || name == "") {
				continue;
			}
			imgItem.put("title", name);
			imgItem.put("url", url + name);
			li.put(String.valueOf(i), imgItem);
			System.out.println(fs[i].getAbsolutePath());
			if (fs[i].isDirectory()) {
				try {
					showAllFiles(fs[i], url);
				} catch (Exception e) {
				}
			}
		}
		item.put("list", li);
		return item;

	}

	public String getName(String path) {
		String p = "[$].*(?:JPG|jpg)";
		Pattern pattern = Pattern.compile(p);
		Matcher matcher = pattern.matcher(path);
		if (matcher.find()) {
			return matcher.group(0);
		} else {
			return "";
		}

	}

}
