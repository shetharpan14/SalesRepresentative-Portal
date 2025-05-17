using System.Data;
using Microsoft.Data.SqlClient;

namespace SalesRepresentative_API.Models
{
    public class SalesRepresentativeDataAccessLayer
    {
        //string connectionString = "Data Source=LAPTOP-RMEF45LI\\SQLEXPRESS;Initial Catalog=SalesData;Integrated Security=True;Encrypt=False";
        public static IConfiguration Configuration { get; set; }

        private string? GetConnectionString()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory
                ()).AddJsonFile("appsettings.json");

            Configuration = builder.Build();
            return Configuration.GetConnectionString("DefaultConnection");
        }

        //To get all sales representative data
        public IEnumerable<SalesRepresentativeData> GetAllSalesRepresentativeData()
        {
            try
            {

                List<SalesRepresentativeData> listSalesData = new List<SalesRepresentativeData>();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spGetAllSalesRepresentativeData", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        SalesRepresentativeData salesData = new SalesRepresentativeData();
                        salesData.SalesRepresentative_ID = Convert.ToInt32(rdr["SalesRepresentative_Id"]);
                        salesData.Representative_First_Name = rdr["Representative_First_Name"].ToString();
                        salesData.Representative_Last_Name = rdr["Representative_Last_Name"].ToString();
                        salesData.Product_Type = rdr["Product_Type"].ToString();
                        salesData.Region_Name = rdr["Region_Name"].ToString();
                        salesData.Performance_Type = rdr["Performance_Type"].ToString();
                        salesData.Product_ID = Convert.ToInt32(rdr["Product_Id"]);
                        salesData.Region_ID = Convert.ToInt32(rdr["Region_Id"]);
                        salesData.Performance_ID = Convert.ToInt32(rdr["Performance_Id"]);
                        listSalesData.Add(salesData);
                    }
                    con.Close();
                }
                return listSalesData;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //To get sales representative data by Id
        public SalesRepresentativeData GetSalesRepresentativeDataById(int SalesRepresentative_Id)
        {
            try
            {
                SalesRepresentativeData salesDataById = new SalesRepresentativeData();
                salesDataById = new SalesRepresentativeData();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spGetSalesRepresentativeDataById", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SalesRepresentative_Id", SalesRepresentative_Id);
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        salesDataById.SalesRepresentative_ID = Convert.ToInt32(rdr["SalesRepresentative_Id"]);
                        salesDataById.Representative_First_Name = rdr["Representative_First_Name"].ToString();
                        salesDataById.Representative_Last_Name = rdr["Representative_Last_Name"].ToString();
                        salesDataById.Product_Type = rdr["Product_Type"].ToString();
                        salesDataById.Region_Name = rdr["Region_Name"].ToString();
                        salesDataById.Performance_Type = rdr["Performance_Type"].ToString();
                        salesDataById.Product_ID = Convert.ToInt32(rdr["Product_Type_Id"]);
                        salesDataById.Region_ID = Convert.ToInt32(rdr["Region_Id"]);
                        salesDataById.Performance_ID = Convert.ToInt32(rdr["Performance_Id"]);
                    }
                    con.Close();
                }
                return salesDataById;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //update sales representative data
        public int UpdateSalesRepresentativeData(SalesRepresentativeData salesData)
        {
            try
            {
                SalesRepresentativeData salesDataById = new SalesRepresentativeData();
                salesDataById = new SalesRepresentativeData();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spUpdateSaleRepresentative", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SalesRepresentative_Id", salesData.SalesRepresentative_ID);
                    cmd.Parameters.AddWithValue("@Representative_First_Name", salesData.Representative_First_Name);
                    cmd.Parameters.AddWithValue("@Representative_Last_Name", salesData.Representative_Last_Name);
                    cmd.Parameters.AddWithValue("@Product_Type_Id", salesData.Product_ID);
                    cmd.Parameters.AddWithValue("@Region_Id", salesData.Region_ID);
                    cmd.Parameters.AddWithValue("@Performance_Id", salesData.Performance_ID);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //To get product list
        public IEnumerable<Product> GetProductList()
        {
            try
            {
                List<Product> listProduct = new List<Product>();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spGetProductList", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Product products = new Product();
                        products.Product_ID = Convert.ToInt32(rdr["Product_Id"]);
                        products.Product_Type = rdr["Product_Type"].ToString();
                        listProduct.Add(products);
                    }
                    con.Close();
                }
                return listProduct;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //To get performance list
        public IEnumerable<Performance> GetPerformanceType()
        {
            try
            {
                List<Performance> listPerformance = new List<Performance>();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spGetPerformanceType", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Performance performance = new Performance();
                        performance.Performance_ID = Convert.ToInt32(rdr["Performance_Id"]);
                        performance.Performance_Type = rdr["Performance_Type"].ToString();
                        listPerformance.Add(performance);
                    }
                    con.Close();
                }
                return listPerformance;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //To get region list
        public IEnumerable<Region> GetRegionList()
        {
            try
            {
                List<Region> listregion = new List<Region>();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spGetRegionList", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    SqlDataReader rdr = cmd.ExecuteReader();
                    while (rdr.Read())
                    {
                        Region region = new Region();
                        region.Region_ID = Convert.ToInt32(rdr["Region_Id"]);
                        region.Region_Name = rdr["Region_Name"].ToString();
                        listregion.Add(region);
                    }
                    con.Close();
                }
                return listregion;
            }
            catch (Exception)
            {

                throw;
            }
        }

        //To add new sales representative record 
        public int AddSalesRepresentativeData(SalesRepresentativeData salesData)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spAddSalesRepresentativeData", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Representative_First_Name", salesData.Representative_First_Name);
                    cmd.Parameters.AddWithValue("@Representative_Last_Name", salesData.Representative_Last_Name);
                    cmd.Parameters.AddWithValue("@Product_Type_Id", salesData.Product_ID);
                    cmd.Parameters.AddWithValue("@Region_Id", salesData.Region_ID);
                    cmd.Parameters.AddWithValue("@Performance_Id", salesData.Performance_ID);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Delete sales representative data by Id
        public int DeleteSalesRepresentative(int salesRepresentative_Id)
        {
            try
            {
                SalesRepresentativeData salesDataById = new SalesRepresentativeData();
                using (SqlConnection con = new SqlConnection(GetConnectionString()))
                {
                    SqlCommand cmd = new SqlCommand("spDeleteSalesRepresentativeDataById", con);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@SalesRepresentative_Id", salesRepresentative_Id);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
                return 1;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
