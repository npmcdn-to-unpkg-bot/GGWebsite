package com.mkking.springmvc.service;

import org.apache.log4j.Logger;
import org.w3c.dom.Document;

import com.mkking.springmvc.service.wcmod.BaseData;

public interface WeMsgFactory {
	public BaseData msgRead(Document msg);

	public String msgSend(BaseData msg);

	public Logger getLog();
}
