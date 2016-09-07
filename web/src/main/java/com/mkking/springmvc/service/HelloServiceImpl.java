package com.mkking.springmvc.service;

import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class HelloServiceImpl implements HelloService {

	private List<String> listFruits;

	private HelloServiceImpl() {
		listFruits = new ArrayList<>();
		listFruits.add("Apple");
		listFruits.add("Banana");
		listFruits.add("Cherry");
	}

	public List<String> getListFruits() {
		return listFruits;
	}

	public String test() {
		return "succeed";
	}

	public String toString() {
		String result = "";
		for (String i : listFruits) {
			result += i;
		}
		return result;
	}
	
	public double[] convertToEntityAttribute(byte[] dbData) {
		double[] ll =new double[2];
		if (dbData == null)
			return null;

		ByteBuffer buffer = ByteBuffer.allocate(8);
		
		ll[0] = getReverse(buffer, dbData, 9);//get lng 经度
		ll[1] = getReverse(buffer, dbData, 17);//get lat 纬度 

		return ll;
	}

	private double getReverse(ByteBuffer buffer, byte[] data, int position) {
		buffer.position(0);
		for (int i = position + 7; i >= position; i--) {
			buffer.put(data[i]);
		}

		buffer.position(0);
		return buffer.getDouble();
	}

}