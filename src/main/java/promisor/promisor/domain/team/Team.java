package promisor.promisor.domain.team;

import lombok.Getter;
import promisor.promisor.domain.model.BaseEntity;
import promisor.promisor.domain.place.domain.Place;
import promisor.promisor.domain.member.Member;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Group 도메인 객체를 나타내는 자바 빈
 *
 * @author Sanha Ko
 */
@Entity
@Getter
public class Team extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leader_id")
    private Member member;

    @Column(length = 10)
    private String groupName;

    @Lob
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    private LocalDateTime date;
}