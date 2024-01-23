package ch.bbw.oz.ZooBackend.controller;

import ch.bbw.oz.ZooBackend.model.GroupTicket;
import ch.bbw.oz.ZooBackend.model.SingleTicket;
import ch.bbw.oz.ZooBackend.model.Ticket;
import ch.bbw.oz.ZooBackend.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/ticket")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @PostMapping("/create-single")
    public Ticket create(@RequestBody SingleTicket ticket){
        return ticketRepository.save(ticket);
    }

    @PostMapping("/create-group")
    public Ticket create(@RequestBody GroupTicket ticket){
        return ticketRepository.save(ticket);
    }

    @GetMapping("/new-single/{id}")
    public Optional<SingleTicket> newSingleTicket(@PathVariable String id) {
        SingleTicket ticket = new SingleTicket(id, "New Buyer " + id, 432.10, "Adult");
        return Optional.of(ticketRepository.save(ticket));
    }

    @GetMapping("/new-group/{id}")
    public Optional<GroupTicket> newGroupTicket(@PathVariable String id) {
        GroupTicket ticket = new GroupTicket(id, "New Buyer " + id, 432.10, 1, 2, 3);
        return Optional.of(ticketRepository.save(ticket));
    }

    @GetMapping("/{id}")
    public Optional<Ticket> findOneById(@PathVariable String id) {
        return ticketRepository.findById(id);
    }
}
