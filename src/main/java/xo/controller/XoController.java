package xo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import xo.model.Xo;
import xo.service.XoService;

import javax.servlet.http.HttpServletRequest;

@Controller
public class XoController {

    @Autowired
    private XoService xoService;

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @RequestMapping("/saveToDB")
    public String saveHistory(HttpServletRequest request){
        String board = request.getParameter("board-size");
        String winner = request.getParameter("the_winner");
        String type = request.getParameter("type");

        Xo xo = new Xo();
        xo.setBoardSize(board + "x" + board);
        xo.setWinner(winner);
        xo.setType_win(type);
        xoService.saveXoHistory(xo);
    return "index";
    }
}
