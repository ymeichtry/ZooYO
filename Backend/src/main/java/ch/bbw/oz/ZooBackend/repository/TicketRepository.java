package ch.bbw.oz.ZooBackend.repository;

import ch.bbw.oz.ZooBackend.model.Ticket;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Optional;
import java.util.UUID;

// Annotates this class as a Repository component in the Spring framework.
// This class is responsible for data access operations on Tickets.
@Repository
public class TicketRepository {
    // A HashMap to store tickets, using their ID as the key and the Ticket object as the value.
    HashMap<String, Ticket> tickets = new HashMap<>();

    // This method saves a ticket to the repository.
    // The generic type <T extends Ticket> allows for saving different types of tickets
    // as long as they extend the Ticket class.
    public <T extends Ticket> T save(T ticket) {
        // If the ticket ID is empty (i.e., new ticket), a new UUID is generated and set as the ticket's ID.
        if (ticket.getId().isEmpty()) {
            ticket.setId(UUID.randomUUID().toString());
        }
        // Puts the ticket into the map, with the ID as the key and the ticket itself as the value.
        tickets.put(ticket.getId(), ticket);
        // Returns the ticket, now with an ID if it didn't have one before.
        return ticket;
    }

    // This method finds a ticket by its ID.
    public Optional<Ticket> findById(String id) {
        // Retrieves the ticket from the map using the provided ID.
        Ticket ticket = tickets.get(id);
        // If the ticket is not found (null), returns an empty Optional.
        if (ticket == null) {
            return Optional.empty();
        } else {
            // If the ticket is found, wraps it in an Optional and returns it.
            return Optional.of(ticket);
        }
    }
}
