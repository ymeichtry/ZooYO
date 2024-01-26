package ch.bbw.oz.ZooBackend.controller;

import ch.bbw.oz.ZooBackend.model.GroupTicket;
import ch.bbw.oz.ZooBackend.model.SingleTicket;
import ch.bbw.oz.ZooBackend.model.Ticket;
import ch.bbw.oz.ZooBackend.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

// Markiert die Klasse als REST-Controller, Teil des Spring MVC-Frameworks.
@RestController
// Ermöglicht Cross-Origin-Anfragen für diese Controller-Klasse.
@CrossOrigin
// Setzt den Basispfad für alle Routen in dieser Klasse auf "/ticket".
@RequestMapping("/ticket")
public class TicketController {

    // Injiziert automatisch eine Instanz von TicketRepository.
    @Autowired
    private TicketRepository ticketRepository;

    // Endpoint zum Erstellen eines SingleTickets. Nimmt POST-Anfragen an "/ticket/create-single" entgegen.
    @PostMapping("/create-single")
    public Ticket create(@RequestBody SingleTicket ticket){
        return ticketRepository.save(ticket);
    }

    // Endpoint zum Erstellen eines GroupTickets. Nimmt POST-Anfragen an "/ticket/create-group" entgegen.
    @PostMapping("/create-group")
    public Ticket create(@RequestBody GroupTicket ticket){
        return ticketRepository.save(ticket);
    }

    // Endpoint zum Erstellen und Rückgabe eines neuen SingleTickets mit einer vorgegebenen ID.
    @GetMapping("/new-single/{id}")
    public Optional<SingleTicket> newSingleTicket(@PathVariable String id) {
        SingleTicket ticket = new SingleTicket(id, "New Buyer " + id, 432.10, "Adult");
        return Optional.of(ticketRepository.save(ticket));
    }

    // Endpoint zum Erstellen und Rückgabe eines neuen GroupTickets mit einer vorgegebenen ID.
    @GetMapping("/new-group/{id}")
    public Optional<GroupTicket> newGroupTicket(@PathVariable String id) {
        GroupTicket ticket = new GroupTicket(id, "New Buyer " + id, 432.10, 1, 2, 3);
        return Optional.of(ticketRepository.save(ticket));
    }

    // Endpoint zum Finden eines Tickets nach ID. Nimmt GET-Anfragen an "/ticket/{id}" entgegen.
    @GetMapping("/{id}")
    public Optional<Ticket> findOneById(@PathVariable String id) {
        return ticketRepository.findById(id);
    }
}
