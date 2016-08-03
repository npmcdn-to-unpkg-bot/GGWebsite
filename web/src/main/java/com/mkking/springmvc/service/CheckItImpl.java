package com.mkking.springmvc.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class CheckItImpl implements CheckIt {

	public String getSK(String signature, String timestamp, String nonce, String echostr) {
		String TOKEN = "locationShare";
		String[] str = { TOKEN, timestamp, nonce };
		Arrays.sort(str); // 字典序排序
		String bigStr = str[0] + str[1] + str[2];
		// SHA1加密
		String digest = SHA1(bigStr);

		// 确认请求来至微信
		if (digest.equals(signature)) {
			return echostr;
		} else {
			return "";
		}
	}

	public String getSignature(String timestamp, String nonce, String url) {
		String appid = "wxc1360ff4bfb0b416", secret = "d0e167edd069f993622c9922301e74bd", result = "";
		String httpUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid
				+ "&secret=" + secret;
		String access_token = request(httpUrl, "access_token");
		String ticketUrl = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" + access_token
				+ "&type=jsapi";
		String ticket = request(ticketUrl, "ticket");
		String signString = "jsapi_ticket=" + ticket + "&noncestr=" + nonce + "&timestamp=" + timestamp + "&url=" + url;
		result = SHA1(signString);
		return result;
	}

	private String request(String httpUrl, String paramName) {
		String result = "";
		BufferedReader reader = null;
		StringBuffer sbf = new StringBuffer();

		try {
			URL url = new URL(httpUrl);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");
			connection.setRequestProperty("Charset", "UTF-8");
			connection.connect();
			InputStream is = connection.getInputStream();
			reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
			String strRead = null;
			while ((strRead = reader.readLine()) != null) {
				sbf.append(strRead);
				sbf.append("\r\n");
			}
			reader.close();
			result = sbf.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}

		JSONObject jo = new JSONObject(result);
		result = jo.getString(paramName);
		return result;

	}

	private static String SHA1(String decript) {
		try {
			MessageDigest digest = java.security.MessageDigest.getInstance("SHA-1");
			digest.update(decript.getBytes());
			byte messageDigest[] = digest.digest();
			// Create Hex String
			StringBuffer hexString = new StringBuffer();
			// 字节数组转换为 十六进制 数
			for (int i = 0; i < messageDigest.length; i++) {
				String shaHex = Integer.toHexString(messageDigest[i] & 0xFF);
				if (shaHex.length() < 2) {
					hexString.append(0);
				}
				hexString.append(shaHex);
			}
			return hexString.toString();

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return "";
	}

	public String test() {
		return "true";
	}
}
