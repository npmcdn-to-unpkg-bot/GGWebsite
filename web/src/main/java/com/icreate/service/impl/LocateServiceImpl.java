package com.icreate.service.impl;

import org.apache.ibatis.annotations.Param;

import com.icreate.dao.LocateMapper;
import com.icreate.entity.Locate;
import com.icreate.service.LocateService;

public class LocateServiceImpl implements LocateService {
	private LocateMapper locateMapper;

	public LocateMapper getLocateMapper() {
		return locateMapper;
	}

	public void setLocateMapper(LocateMapper locateMapper) {
		this.locateMapper = locateMapper;
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		return this.locateMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int insert(Locate record) {
		return this.locateMapper.insert(record);
	}

	@Override
	public int insertSelective(Locate record) {
		return this.insertSelective(record);
	}

	@Override
	public Locate selectByPrimaryKey(Integer id) {
		return this.locateMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKeySelective(Locate record) {
		return this.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKeyWithBLOBs(Locate record) {
		return this.updateByPrimaryKeyWithBLOBs(record);
	}

	@Override
	public int updateByPrimaryKey(Locate record) {
		return this.locateMapper.updateByPrimaryKey(record);
	}
	@Override
	public  Locate selectNewData(){
		return this.locateMapper.selectNewData();
	}
	public int insertFromWkt(
    		@Param("userid") long userid,
    		@Param("title") String title,
    		@Param("icon") String icon,
    		@Param("flag") long flag,
    		@Param("remark") String remark,
    		@Param("wkt") String wkt){
		return this.locateMapper.insertFromWkt( userid, title, icon, flag, remark, wkt);
	}

}
