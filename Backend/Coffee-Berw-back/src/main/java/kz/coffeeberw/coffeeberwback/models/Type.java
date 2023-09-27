package kz.coffeeberw.coffeeberwback.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "types_of_drinks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Type {
    @Id
    private ObjectId id;
    private String name;
}
