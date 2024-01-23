package ch.bbw.oz.ZooBackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GroupTicket extends Ticket {
    int numChildren;
    int numAdults;
    int numSeniors;

    public GroupTicket(String id, String buyerName, double price, int numChildren, int numAdults, int numSeniors) {
        super(id, buyerName, price);
        this.numChildren = numChildren;
        this.numAdults = numAdults;
        this.numSeniors = numSeniors;
    }
}
