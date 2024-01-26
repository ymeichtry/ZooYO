package ch.bbw.oz.ZooBackend;

import ch.bbw.oz.ZooBackend.model.Ticket;
import ch.bbw.oz.ZooBackend.repository.TicketRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;
import java.util.UUID;

public class TicketRepositoryTest {

    private TicketRepository ticketRepository;

    @BeforeEach
    public void setUp() {
        ticketRepository = new TicketRepository();
    }

    @Test
    public void testSaveNewTicket() {
        Ticket newTicket = new Ticket(); // Assuming default constructor exists
        // Set properties of the ticket if necessary

        Ticket savedTicket = ticketRepository.save(newTicket);

        assertNotNull(savedTicket.getId(), "Ticket ID should be generated and not null");
        assertEquals(savedTicket, ticketRepository.findById(savedTicket.getId()).orElse(null),
                "Saved ticket should be retrievable from the repository");
    }

    @Test
    public void testSaveExistingTicket() {
        Ticket existingTicket = new Ticket(); // Assuming default constructor exists
        String existingId = UUID.randomUUID().toString();
        existingTicket.setId(existingId);
        ticketRepository.save(existingTicket);

        existingTicket.setId("new value"); // Replace with actual property setter
        Ticket updatedTicket = ticketRepository.save(existingTicket);

        assertEquals(existingId, updatedTicket.getId(), "Existing ticket ID should remain the same");
    }

    @Test
    public void testFindByIdExisting() {
        Ticket ticket = new Ticket(); // Assuming default constructor exists
        ticket = ticketRepository.save(ticket);

        Optional<Ticket> foundTicket = ticketRepository.findById(ticket.getId());
        assertTrue(foundTicket.isPresent(), "Ticket should be found with existing ID");
        assertEquals(ticket, foundTicket.get(), "Found ticket should match the saved ticket");
    }

    @Test
    public void testFindByIdNonExisting() {
        Optional<Ticket> foundTicket = ticketRepository.findById("non-existing-id");
        assertFalse(foundTicket.isPresent(), "No ticket should be found with a non-existing ID");
    }
}