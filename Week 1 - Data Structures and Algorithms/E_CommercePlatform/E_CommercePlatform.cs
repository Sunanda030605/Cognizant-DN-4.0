using System;

class E_CommercePlatform
{
    static void Main()
    {
        Product[] items = new Product[]
        {
            new Product(1, "T-shirt", "Clothing"),
            new Product(2, "Jeans", "Clothing"),
            new Product(3, "Laptop", "Electronics"),
            new Product(4, "Charger", "Electronics"),
            new Product(5, "Mug", "Kitchen")
        };

        Console.WriteLine("Linear Search: Find products in 'Clothing'");
        LinearSearchByCategory(items, "Clothing");

        Array.Sort(items, (a, b) => a.Name.CompareTo(b.Name));

        Console.WriteLine("\nBinary Search: Search for 'Laptop'");
        Product found = BinarySearchByName(items, "Laptop");
        if (found != null)
            found.Display();
        else
            Console.WriteLine("Product not found.");
    }

    public static void LinearSearchByCategory(Product[] products, string category)
    {
        bool found = false;
        foreach (Product p in products)
        {
            if (p.Category.Equals(category, StringComparison.OrdinalIgnoreCase))
            {
                p.Display();
                found = true;
            }
        }

        if (!found)
            Console.WriteLine("No products found in this category.");
    }

    public static Product BinarySearchByName(Product[] products, string name)
    {
        int low = 0;
        int high = products.Length - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;
            int result = string.Compare(products[mid].Name, name, true);

            if (result == 0)
                return products[mid];
            else if (result < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }
}

public class Product
{
    public int Id;
    public string Name;
    public string Category;

    public Product(int id, string name, string category)
    {
        Id = id;
        Name = name;
        Category = category;
    }

    public void Display()
    {
        Console.WriteLine($"ID: {Id}, Name: {Name}, Category: {Category}");
    }
}
