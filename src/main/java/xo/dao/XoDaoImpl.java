package xo.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import xo.model.Xo;

@Repository
public class XoDaoImpl implements XoDao{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void saveXoHistory(Xo xo) {
        Session session = sessionFactory.getCurrentSession();
        session.save(xo);
    }
}
