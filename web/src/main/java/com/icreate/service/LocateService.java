package com.icreate.service;

import org.apache.ibatis.annotations.Param;

import com.icreate.entity.Locate;

public interface LocateService {
	public int deleteByPrimaryKey(Integer id);

	public int insert(Locate record);

	public int insertSelective(Locate record);

	public Locate selectByPrimaryKey(Integer id);

	public int updateByPrimaryKeySelective(Locate record);

	public int updateByPrimaryKeyWithBLOBs(Locate record);

	public int updateByPrimaryKey(Locate record);

	public Locate selectNewData();

	public int insertFromWkt(@Param("userid") long userid, @Param("title") String title, @Param("icon") String icon,
			@Param("flag") long flag, @Param("remark") String remark, @Param("wkt") String wkt);
}
