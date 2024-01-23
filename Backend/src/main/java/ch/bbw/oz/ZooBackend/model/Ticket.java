package ch.bbw.oz.ZooBackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Ticket {
    private String id;
    private String buyerName;
    private double price;
}
