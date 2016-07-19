package com.icreate.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.icreate.entity.Article;
import com.icreate.entity.ArticleWithBLOBs;

public interface ArticleMapper {
	int deleteByPrimaryKey(Short articleId);

	int insert(ArticleWithBLOBs record);

	int insertSelective(ArticleWithBLOBs record);

	ArticleWithBLOBs selectByPrimaryKey(Short articleId);

	int updateByPrimaryKeySelective(ArticleWithBLOBs record);

	int updateByPrimaryKeyWithBLOBs(ArticleWithBLOBs record);

	int updateByPrimaryKey(Article record);

	List<ArticleWithBLOBs> selectByPage(@Param("start") Short start, @Param("end") Short end);

	List<ArticleWithBLOBs> updateByPrimaryKey(Short start, Short end);
}