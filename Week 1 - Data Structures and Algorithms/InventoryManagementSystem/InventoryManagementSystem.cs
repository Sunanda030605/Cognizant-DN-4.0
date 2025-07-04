using System;
using System.Collections.Generic;

namespace InventoryManagementSystem
{
    public class Product
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }

        public Product(string productId, string productName, int quantity, double price)
        {
            ProductId = productId;
            ProductName = productName;
            Quantity = quantity;
            Price = price;
        }

        public void Display()
        {
            Console.WriteLine($"ID: {ProductId}, Name: {ProductName}, Quantity: {Quantity}, Price: Rs.{Price}");
        }
    }

    public class Inventory
    {
        private Dictionary<string, Product> products = new Dictionary<string, Product>();

        public void AddProduct(Product product)
        {
            if (!products.ContainsKey(product.ProductId))
            {
                products[product.ProductId] = product;
                Console.WriteLine("Product added successfully.");
            }
            else
            {
                Console.WriteLine("Product ID already exists!");
            }
        }

        public void UpdateProduct(string productId, int quantity, double price)
        {
            if (products.ContainsKey(productId))
            {
                products[productId].Quantity = quantity;
                products[productId].Price = price;
                Console.WriteLine("Product updated successfully.");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }
        }

        public void DeleteProduct(string productId)
        {
            if (products.Remove(productId))
            {
                Console.WriteLine("Product deleted successfully.");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }
        }

        public void DisplayProducts()
        {
            if (products.Count == 0)
            {
                Console.WriteLine("No products available.");
                return;
            }

            foreach (var product in products.Values)
            {
                product.Display();
            }
        }
    }

    class InventoryManagementSystem
    {
        static void Main(string[] args)
        {
            Inventory inventory = new Inventory();

            inventory.AddProduct(new Product("P001", "Keyboard", 50, 699.99));
            inventory.AddProduct(new Product("P002", "Mouse", 100, 299.49));
            inventory.AddProduct(new Product("P003", "Monitor", 30, 5499.00));

            Console.WriteLine("\nAll Products:");
            inventory.DisplayProducts();

            inventory.UpdateProduct("P002", 80, 279.49);
            Console.WriteLine("\nAfter Updating Product P002:");
            inventory.DisplayProducts();

            inventory.DeleteProduct("P001");
            Console.WriteLine("\nAfter Deleting Product P001:");
            inventory.DisplayProducts();
        }
    }
}
