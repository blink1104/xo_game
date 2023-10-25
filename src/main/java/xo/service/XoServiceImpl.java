package xo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xo.dao.XoDao;
import xo.model.Xo;

@Service
public class XoServiceImpl implements XoService{

    @Autowired
    private XoDao xoDao;

    @Override
    @Transactional
    public void saveXoHistory(Xo xo) {
        xoDao.saveXoHistory(xo);
    }
}
