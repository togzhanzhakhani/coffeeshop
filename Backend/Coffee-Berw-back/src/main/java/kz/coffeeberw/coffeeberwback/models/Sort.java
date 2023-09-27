package kz.coffeeberw.coffeeberwback.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sorts_of_drinks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sort {
    @Id
    private ObjectId id;
    private String name;
}
