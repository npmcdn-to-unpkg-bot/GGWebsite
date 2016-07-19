package com.icreate.dao;

import com.icreate.entity.ArticleSort;

public interface ArticleSortMapper {
    int deleteByPrimaryKey(Integer sortArticleId);

    int insert(ArticleSort record);

    int insertSelective(ArticleSort record);

    ArticleSort selectByPrimaryKey(Integer sortArticleId);

    int updateByPrimaryKeySelective(ArticleSort record);

    int updateByPrimaryKey(ArticleSort record);
}