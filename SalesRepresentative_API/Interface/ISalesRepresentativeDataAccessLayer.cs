using SalesRepresentative_API.Models;
namespace SalesRepresentative_API.Interface
{
    public interface ISalesRepresentativeDataAccessLayer
    {
        IEnumerable<SalesRepresentativeData> GetAllSalesRepresentativeData();
        int AddSalesRepresentativeData(SalesRepresentativeData srd);
        int UpdateSalesRepresentativeData(SalesRepresentativeData srd);
        SalesRepresentativeData GetSalesRepresentativeDataById(int salesRepresentativeId);
        IEnumerable<Product> GetProductList();
        IEnumerable<Performance> GetPerformanceType();
        IEnumerable<Region> GetRegionList();
        int DeleteSalesRepresentative(int salesRepresentativeId);

    }
}
