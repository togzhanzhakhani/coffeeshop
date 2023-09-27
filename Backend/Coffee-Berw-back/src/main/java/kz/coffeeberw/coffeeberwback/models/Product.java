package kz.coffeeberw.coffeeberwback.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "products")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    private ObjectId id;
    @DocumentReference
    private Category categories;
    private String url;
    private String name;
    private String price;
    private String description;
    private String image_url;
    private Double rating;
    private Integer count;
}
