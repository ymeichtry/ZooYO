package ch.bbw.oz.ZooBackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

// @Data ist eine Lombok-Annotation, um automatisch Getter, Setter, equals, hashCode und toString Methoden zu erstellen.
// @AllArgsConstructor generiert einen Konstruktor mit einem Parameter für jedes Feld in der Klasse.
// @NoArgsConstructor generiert einen leeren Konstruktor (ohne Parameter).
// @ToString generiert eine Implementierung der toString()-Methode.
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SingleTicket extends Ticket {
    // Feld zur Speicherung der Altersgruppe des Ticketinhabers.
    String ageGroup;

    // Benutzerdefinierter Konstruktor, um SingleTicket mit spezifischen Werten zu initialisieren.
    // Dieser Konstruktor ruft den Konstruktor der übergeordneten Ticket-Klasse auf
    // und setzt auch das Feld ageGroup, das spezifisch für SingleTicket ist.
    public SingleTicket(String id, String buyerName, double price, String ageGroup) {
        super(id, buyerName, price); // Aufruf des Konstruktors der Elternklasse Ticket.
        this.ageGroup = ageGroup;    // Setzen des Feldes ageGroup.
    }
}
