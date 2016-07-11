package com.mkking.springmvc.service;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.Date;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.apache.catalina.SessionListener;
import org.apache.log4j.Logger;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.icreate.entity.MsgData;
import com.icreate.service.MsgDataService;
import com.mkking.springmvc.service.wcmod.BaseData;
import com.mkking.springmvc.service.wcmod.TextData;

@Service
public class WeMsgFactoryImpl implements WeMsgFactory {

	@Autowired
	private MsgDataService msgDataService = null;

	private static Logger log = Logger.getLogger(SessionListener.class);

	public BaseData msgRead(Document doc) {
		BaseData msgMod = null;
		getLog().info("MSG IN..............................");
		getLog().info(getXmlString(doc));
		try {
			NodeList nList = doc.getElementsByTagName("xml");
			Element item = (Element) nList.item(0);
			String msgType = item.getElementsByTagName("MsgType").item(0).getFirstChild().getNodeValue();
			switch (msgType) {
			case "text":
				TextData textMsg = new TextData();
				textMsg.setMsgId(item.getElementsByTagName("MsgId").item(0).getFirstChild().getNodeValue());
				textMsg.setCreateTime(item.getElementsByTagName("CreateTime").item(0).getFirstChild().getNodeValue());
				textMsg.setFromUserName(
						item.getElementsByTagName("FromUserName").item(0).getFirstChild().getNodeValue());
				textMsg.setMsgType(item.getElementsByTagName("MsgType").item(0).getFirstChild().getNodeValue());
				textMsg.setToUserName(item.getElementsByTagName("ToUserName").item(0).getFirstChild().getNodeValue());
				textMsg.setContent(item.getElementsByTagName("Content").item(0).getFirstChild().getNodeValue());
				msgMod = textMsg;
				break;

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		getLog().info("MSG read done..............................");
		return msgMod;

	}

	/* 替换特殊符号 */
	private String revertString(String input) {
		// 使失去用处的标签从新有作用
		if (input == null) {
			input = "";
			return input;
		}
		input = input.trim().replaceAll("&amp;", "&");
		input = input.trim().replaceAll("&lt;", "<");
		input = input.trim().replaceAll("&gt;", ">");
		input = input.trim().replaceAll("    ", "\t");
		input = input.trim().replaceAll("\n", "\r\n");
		input = input.trim().replaceAll("<br>", "\n");
		input = input.trim().replaceAll(" &nbsp;", "  ");
		input = input.trim().replaceAll("&quot;", "\"");
		input = input.trim().replaceAll("&#39;", "'");
		input = input.trim().replaceAll("&#92;", "\\\\");
		return input;
	}

	/* W3c doc 转 String */
	private String getXmlString(Document doc) {
		TransformerFactory tf = TransformerFactory.newInstance();
		try {
			Transformer t = tf.newTransformer();
			// t.setOutputProperty(OutputKeys.ENCODING, "UTF-8");//
			// 解决中文问题，试过用GBK不行
			t.setOutputProperty(OutputKeys.METHOD, "html");
			t.setOutputProperty(OutputKeys.VERSION, "4.0");
			t.setOutputProperty(OutputKeys.INDENT, "no");
			ByteArrayOutputStream bos = new ByteArrayOutputStream();
			t.transform(new DOMSource(doc), new StreamResult(bos));
			return bos.toString();
		} catch (TransformerConfigurationException e) {
			e.printStackTrace();
		} catch (TransformerException e) {
			e.printStackTrace();
		}
		return "";
	}

	/**
	 * @param urlAll
	 *            :请求接口
	 * @param httpArg
	 *            :参数
	 * @return 返回结果
	 */
	public String request(String httpUrl, String info, String userId) {
		BufferedReader reader = null;
		String result = null;
		StringBuffer sbf = new StringBuffer();
		String httpArg = "key=cb788a2120aab91bc03687dfb7bb7183&";
		try {
			info = URLEncoder.encode(info, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		String infoStr = "info=" + info + "&";
		String userIdStr = "userid=" + userId + "&";
		httpUrl = httpUrl + "?" + httpArg + infoStr + userIdStr;

		try {
			URL url = new URL(httpUrl);
			HttpURLConnection connection = (HttpURLConnection) url.openConnection();
			connection.setRequestMethod("GET");
			// 填入apikey到HTTP header
			connection.setRequestProperty("apikey", "cb788a2120aab91bc03687dfb7bb7183");
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
		result = jo.getString("text");

		MsgData record = new MsgData();
		record.setId((int) new Date().getTime());
		record.setComemsg(info);
		record.setRemsg(result);
		record.setUser(userId);
		msgDataService.insert(record);

		return result;
	}

	private String toUTF8(String s) {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if (c >= 0 && c <= 255) {
				sb.append(c);
			} else {
				byte[] b;
				try {
					b = Character.toString(c).getBytes("UTF-8");
				} catch (Exception e) {
					e.printStackTrace();
					b = new byte[0];
				}
				for (int j = 0; j < b.length; j++) {
					int k = b[j];
					if (k < 0)
						k += 256;
					sb.append("%" + Integer.toHexString(k).toUpperCase());
				}
			}
		}
		return sb.toString();
	}

	public String msgSend(BaseData msg) {
		getLog().info("MSG start send..............................");
		String msgStr = "";
		Document doc = null;
		Element xml, toUserName;
		Element fromUserName = null;
		Element createTime = null;
		Element msgType = null;
		Element content = null;

		try {
			// 得到DOM解析器的工厂实例
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			// 从DOM工厂中获得DOM解析器
			DocumentBuilder dbBuilder = dbFactory.newDocumentBuilder();
			// 创建文档树模型对象
			doc = dbBuilder.newDocument();

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		switch (msg.getMsgType()) {
		case "text":
			if (doc != null) {
				String url = "http://www.tuling123.com/openapi/api";
				String reTest = "error";
				// httpArg = URLEncoder.encode(httpArg);
				try {
					reTest = request(url, msg.getMsg().get("content"), msg.getFromUserName());
				} catch (Exception e) {
					e.printStackTrace();

				}
				// 创建school元素
				xml = doc.createElement("xml");
				// 创建student元素
				toUserName = doc.createElement("ToUserName");
				toUserName.appendChild(doc.createTextNode(msg.packageStr(msg.getFromUserName())));
				xml.appendChild(toUserName);
				fromUserName = doc.createElement("FromUserName");
				fromUserName.appendChild(doc.createTextNode(msg.packageStr(msg.getToUserName())));
				xml.appendChild(fromUserName);
				createTime = doc.createElement("CreateTime");
				Long time = new Date().getTime();
				createTime.appendChild(doc.createTextNode(String.valueOf(time)));
				xml.appendChild(createTime);
				msgType = doc.createElement("MsgType");
				msgType.appendChild(doc.createTextNode(msg.packageStr("text")));
				xml.appendChild(msgType);
				content = doc.createElement("Content");
				try {
					reTest = URLEncoder.encode(reTest, "UTF-8");
				} catch (Exception e) {

				}
				content.appendChild(doc.createTextNode(msg.packageStr(reTest)));				
				xml.appendChild(content);

				// 将student作为子元素添加到树的根节点school
				xml.appendChild(toUserName);
				// 添加到文档树中
				doc.appendChild(xml);
				msgStr = getXmlString(doc);
				// 将内存中的文档通过文件流生成insertSchool.xml,XmlDocument位于crison.jar下

				System.out.println("create suecceed");
				// try {
				// msgStr = new String(msgStr.getBytes("ISO-8859-1"), "UTF-8");
				// } catch (Exception e) {
				//
				// }
				System.out.println(msgStr);
			}

		}
		getLog().info("MSG  send done..............................");
		msgStr = revertString(msgStr);
		getLog().info(getEncoding(msgStr));
		getLog().info(msgStr);
		// try {
		// // log.info(getEncoding(reTest));
		// msgStr = new String(msgStr.getBytes("UTF－8"), "GB2312");
		// } catch (Exception e) {
		// }
		getLog().info(getEncoding(msgStr));
		return revertString(msgStr);
	}

	/**
	 * 判断字符串的编码
	 * 
	 * @param str
	 * @return
	 */
	public String getEncoding(String str) {
		String encode = "GB2312";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				String s = encode;
				return s;
			}
		} catch (Exception exception) {
		}
		encode = "ISO-8859-1";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				String s1 = encode;
				return s1;
			}
		} catch (Exception exception1) {
		}
		encode = "UTF-8";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				String s2 = encode;
				return s2;
			}
		} catch (Exception exception2) {
		}
		encode = "GBK";
		try {
			if (str.equals(new String(str.getBytes(encode), encode))) {
				String s3 = encode;
				return s3;
			}
		} catch (Exception exception3) {
		}
		return "";
	}

	public Logger getLog() {
		return log;
	}

}
