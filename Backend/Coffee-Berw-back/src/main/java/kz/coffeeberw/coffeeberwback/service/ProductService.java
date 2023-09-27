package kz.coffeeberw.coffeeberwback.service;

import kz.coffeeberw.coffeeberwback.models.Product;
import kz.coffeeberw.coffeeberwback.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository){
        this.repository = repository;
    }

    public List<Product> allProducts(){
        return repository.findAll();
    }
}
