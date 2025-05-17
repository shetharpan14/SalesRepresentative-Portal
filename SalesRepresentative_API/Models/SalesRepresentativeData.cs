namespace SalesRepresentative_API.Models
{
    public class SalesRepresentativeData
    {
        public int SalesRepresentative_ID { get; set; }

        public string? Representative_First_Name { get; set; }

        public string? Representative_Last_Name { get; set; }

        public string? Product_Type { get; set; }

        public string? Region_Name { get; set; }

        public string? Performance_Type { get; set; }

        public int Product_ID { get; set; }

        public int Region_ID { get; set; }

        public int Performance_ID { get; set; }
    }

    public class Product
    {
        public int Product_ID { get; set; }

        public string? Product_Type { get; set; }
    }

    public class Region
    {
        public int Region_ID { get; set; }

        public string? Region_Name { get; set; }
    }

    public class Performance
    {
        public int Performance_ID { get; set; }

        public string? Performance_Type { get; set; }
    }
}
