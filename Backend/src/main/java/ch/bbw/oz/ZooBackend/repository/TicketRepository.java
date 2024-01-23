package ch.bbw.oz.ZooBackend.repository;

import ch.bbw.oz.ZooBackend.model.Ticket;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Optional;
import java.util.UUID;

@Repository
public class TicketRepository {
    HashMap<String, Ticket> tickets = new HashMap<>();

    public <T extends Ticket> T save(T ticket) {
        if (ticket.getId().isEmpty()) {
            ticket.setId(UUID.randomUUID().toString());
        }
        tickets.put(ticket.getId(), ticket);
        return ticket;
    }

    public Optional<Ticket> findById(String id) {
        Ticket ticket = tickets.get(id);
        if (ticket == null) {
            return Optional.empty();
        } else {
            return Optional.of(ticket);
        }
    }
}
