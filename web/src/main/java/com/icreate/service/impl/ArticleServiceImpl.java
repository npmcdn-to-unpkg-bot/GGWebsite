package com.icreate.service.impl;

import java.util.List;

import com.icreate.dao.ArticleMapper;
import com.icreate.entity.Article;
import com.icreate.entity.ArticleWithBLOBs;
import com.icreate.service.ArticleService;

public class ArticleServiceImpl implements ArticleService {

	private ArticleMapper articleMapper;

	@Override
	public int deleteByPrimaryKey(Short articleId) {
		// TODO Auto-generated method stub
		return articleMapper.deleteByPrimaryKey(articleId);
	}

	@Override
	public int insert(ArticleWithBLOBs record) {
		// TODO Auto-generated method stub
		return articleMapper.insert(record);
	}

	@Override
	public int insertSelective(ArticleWithBLOBs record) {
		// TODO Auto-generated method stub
		return articleMapper.insertSelective(record);
	}

	@Override
	public ArticleWithBLOBs selectByPrimaryKey(Short articleId) {
		// TODO Auto-generated method stub
		return articleMapper.selectByPrimaryKey(articleId);
	}

	@Override
	public int updateByPrimaryKeySelective(ArticleWithBLOBs record) {
		// TODO Auto-generated method stub
		return articleMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKeyWithBLOBs(ArticleWithBLOBs record) {
		// TODO Auto-generated method stub
		return articleMapper.updateByPrimaryKeyWithBLOBs(record);
	}

	@Override
	public int updateByPrimaryKey(Article record) {
		// TODO Auto-generated method stub
		return articleMapper.updateByPrimaryKey(record);
	}
	
	public List<ArticleWithBLOBs> selectByPage(Short start, Short end){
		return articleMapper.selectByPage(start,end);
	}

	public ArticleMapper getArticleMapper() {
		return articleMapper;
	}

	public void setArticleMapper(ArticleMapper articleMapper) {
		this.articleMapper = articleMapper;
	}
	


}
