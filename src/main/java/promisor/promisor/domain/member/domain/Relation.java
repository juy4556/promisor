package promisor.promisor.domain.member.domain;

import lombok.Getter;
import promisor.promisor.domain.model.BaseEntity;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.util.Optional;

import static javax.persistence.FetchType.*;

@Entity
@Getter
public class Relation extends BaseEntity {

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member owner;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "friend_id")
    private Member friend;

    protected Relation() {}

    public Relation(LocalDateTime createdAt, LocalDateTime updatedAt, Member owner, Member friend) {
        super(createdAt, updatedAt);
        this.owner = owner;
        this.friend = friend;
    }

    public Relation(Member owner, Member friend) {
        this.owner = owner;
        this.friend = friend;
    }
}