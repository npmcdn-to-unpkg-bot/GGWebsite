package com.mkking.springmvc.service;

import java.util.List;

public interface HelloService {

	public List<String> getListFruits();

	public String test();

	public String toString();

	public double[] convertToEntityAttribute(byte[] dbData);

}