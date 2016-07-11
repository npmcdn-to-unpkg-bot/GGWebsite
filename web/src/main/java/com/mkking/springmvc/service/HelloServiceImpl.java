package com.mkking.springmvc.service;

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

}