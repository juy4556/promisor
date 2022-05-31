package promisor.promisor.domain.team.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import promisor.promisor.domain.member.domain.Member;
import promisor.promisor.domain.team.domain.Team;

import java.util.List;
import java.util.Optional;


@Transactional(readOnly = true)
public interface TeamRepository extends JpaRepository<Team, Long> {

    Optional<Team> findByMember(Member member);

    @Query("select distinct t" +
            " from Team t" +
            " join fetch t.teamMembers tm" +
            " join fetch tm.member m" +
            " where m.id = :id")
    List<Team> findGroupInfoWithMembers(@Param("id") Long id);
}
