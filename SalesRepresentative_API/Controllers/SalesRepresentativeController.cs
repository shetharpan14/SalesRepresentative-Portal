using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SalesRepresentative_API.Models;

namespace SalesRepresentative_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesRepresentativeController : ControllerBase
    {
        SalesRepresentativeDataAccessLayer objSalesRepresentativeData = new SalesRepresentativeDataAccessLayer();        

        [HttpGet]
        [Route("GetAllSalesRepresentativeData")]
        public IEnumerable<SalesRepresentativeData> GetAllSalesRepresentativeData()
        {
            return objSalesRepresentativeData.GetAllSalesRepresentativeData();
        }

        [HttpPost]
        [Route("AddSalesRepresentativeData")]
        public int AddSalesRepresentativeData([FromBody] SalesRepresentativeData salesRepresentativeData)
        {
            return objSalesRepresentativeData.AddSalesRepresentativeData(salesRepresentativeData);
        }

        [HttpPut]
        [Route("UpdateSalesRepresentativeData")]
        public int UpdateSalesRepresentativeData([FromBody] SalesRepresentativeData salesRepresentativeData)
        {
            return objSalesRepresentativeData.UpdateSalesRepresentativeData(salesRepresentativeData);
        }

        [HttpGet("SalesRepresentativeDetails/{salesRepresentativeId}")]
        public SalesRepresentativeData SalesRepresentativeDetails(int salesRepresentativeId)
        {
            return objSalesRepresentativeData.GetSalesRepresentativeDataById(salesRepresentativeId);
        }

        [HttpGet]
        [Route("GetProductList")]
        public IEnumerable<Product> GetProductList()
        {
            return objSalesRepresentativeData.GetProductList();
        }

        [HttpGet]
        [Route("GetPerformanceType")]
        public IEnumerable<Performance> GetPerformanceType()
        {
            return objSalesRepresentativeData.GetPerformanceType();
        }

        [HttpGet]
        [Route("GetRegionList")]
        public IEnumerable<Region> GetRegions()
        {
            return objSalesRepresentativeData.GetRegionList();
        }

        [HttpDelete]
        [Route("DeleteSalesRepresentative/{salesRepresentativeId}")]
        public int DeleteSalesRepresentative(int salesRepresentativeId)
        {
            return objSalesRepresentativeData.DeleteSalesRepresentative(salesRepresentativeId);
        }
    }
}
