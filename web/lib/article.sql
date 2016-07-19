
CREATE TABLE user (
 user_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
 group_id mediumint(8) NOT NULL COMMENT '用户组ID',
 user_name varchar(32) NOT NULL COMMENT '用户名',
 user_pwd varchar(32) NOT NULL COMMENT '用户密码',

 PRIMARY KEY (user_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;
----------------------------
--article 文章表
----------------------------
CREATE TABLE article (
 article_id smallint(5) NOT NULL AUTO_INCREMENT COMMENT '日志自增ID号',
 article_name varchar(128) NOT NULL COMMENT '文章名称',
 article_time int(13) NOT NULL COMMENT '发布时间',
 article_ip varchar(15) NOT NULL COMMENT '发布IP',
 article_click int(10) NOT NULL COMMENT '查看人数',
 sort_article_id mediumint(8) NOT NULL COMMENT '所属分类',
 user_id mediumint(8) NOT NULL COMMENT '所属用户ID',
 article_content text NOT NULL COMMENT '文章内容',
 article_summary text NOT NULL COMMENT '文章摘要',
 article_up tinyint(3) NOT NULL DEFAULT 0 COMMENT '是否置顶:0为否，1为是',
 PRIMARY KEY (article_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;


---------------------------
--article_sort 文章分类表
---------------------------
CREATE TABLE article_sort (
 sort_article_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '文章自增ID',
 user_id mediumint(8) NOT NULL COMMENT '该分类所属用户',
 sort_article_name varchar(60) NOT NULL COMMENT '分类名称',
 PRIMARY KEY (sort_article_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

