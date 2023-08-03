package org.radak.brandy.app.model;

import javax.persistence.*;

@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private double quantity;
    @Column(nullable = false)
    private boolean availability;
    @ManyToOne(optional = false)
    private Brandy product;
    @Column(nullable = false)
    private String description;

    public Stock() {super();
    }

    public Stock(Long id, double quantity, boolean availability, Brandy product, String description) {
        this.id = id;
        this.quantity = quantity;
        this.availability = availability;
        this.product = product;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public Brandy getProduct() {
        return product;
    }

    public void setProduct(Brandy product) {
        this.product = product;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
