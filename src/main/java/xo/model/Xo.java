package xo.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "xo")
public class Xo {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    @Column(length = 10)
    private long id;

    @Column(nullable = false,length = 20)
    private String boardSize;

    @Column(nullable = false,length = 20)
    private String winner;

    @Column(nullable = false,length = 20)
    private String type_win;

    public Xo() {
    }

    public Xo(long id, String boardSize, String winner, String type_win) {
        this.id = id;
        this.boardSize = boardSize;
        this.winner = winner;
        this.type_win = type_win;
    }

    public String getType_win() {
        return type_win;
    }

    public void setType_win(String type_win) {
        this.type_win = type_win;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBoardSize() {
        return boardSize;
    }

    public void setBoardSize(String boardSize) {
        this.boardSize = boardSize;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }
}
