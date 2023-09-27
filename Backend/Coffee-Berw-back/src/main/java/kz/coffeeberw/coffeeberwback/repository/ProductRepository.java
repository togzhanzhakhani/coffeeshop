package kz.coffeeberw.coffeeberwback.repository;

import kz.coffeeberw.coffeeberwback.models.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, ObjectId> {
}
