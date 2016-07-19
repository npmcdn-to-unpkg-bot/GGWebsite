package com.icreate.service;

import java.util.List;

import com.icreate.entity.Article;
import com.icreate.entity.ArticleWithBLOBs;

public interface ArticleService {

	public int deleteByPrimaryKey(Short articleId);

	public int insert(ArticleWithBLOBs record);

	public int insertSelective(ArticleWithBLOBs record);

	public ArticleWithBLOBs selectByPrimaryKey(Short articleId);

	public int updateByPrimaryKeySelective(ArticleWithBLOBs record);

	public int updateByPrimaryKeyWithBLOBs(ArticleWithBLOBs record);

	public int updateByPrimaryKey(Article record);

	public List<ArticleWithBLOBs> selectByPage(Short start, Short end);
}
