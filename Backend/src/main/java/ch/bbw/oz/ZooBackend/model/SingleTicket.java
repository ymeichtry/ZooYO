package ch.bbw.oz.ZooBackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SingleTicket extends Ticket {
    String ageGroup;

    public SingleTicket(String id, String buyerName, double price, String ageGroup) {
        super(id, buyerName, price);
        this.ageGroup = ageGroup;
    }
}
