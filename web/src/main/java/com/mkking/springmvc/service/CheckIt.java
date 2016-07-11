package com.mkking.springmvc.service;

public interface CheckIt {

	public String getSK(String signature, String timestamp, String nonce, String echostr);

	public String test();
}
