package com.mkking.springmvc.service.wcmod;

import java.util.HashMap;
import java.util.Map;

public class TextData extends BaseData {
	public String bbs;
	private String content;

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Map<String, String> getMsg() {
		Map<String, String> data = new HashMap<String, String>();
		data.put("content", getContent());
		return data;
	}

	public String packageStr(String str) {
		String mod = "<![CDATA[" + str + "]]>";
		return mod;
	}

}
