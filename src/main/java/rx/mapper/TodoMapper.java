package rx.mapper;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

/**
 * Created by imcts on 2016. 11. 12..
 */

@Component
public interface TodoMapper extends JpaRepository<Todos, Integer> {}
