using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SalesRepresentative_API.Models;
using SalesRepresentative_API.Interface;

namespace SalesRepresentative_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesRepresentativeController : ControllerBase
    {
        private readonly ISalesRepresentativeDataAccessLayer _objSalesRepresentativeData;

        public SalesRepresentativeController(ISalesRepresentativeDataAccessLayer objSalesRepresentativeData)
        {
            _objSalesRepresentativeData=objSalesRepresentativeData;
        }

        [HttpGet]
        [Route("GetAllSalesRepresentativeData")]
        public IEnumerable<SalesRepresentativeData> GetAllSalesRepresentativeData()
        {
            return _objSalesRepresentativeData.GetAllSalesRepresentativeData();
        }

        [HttpPost]
        [Route("AddSalesRepresentativeData")]
        public int AddSalesRepresentativeData([FromBody] SalesRepresentativeData salesRepresentativeData)
        {
            return _objSalesRepresentativeData.AddSalesRepresentativeData(salesRepresentativeData);
        }

        [HttpPut]
        [Route("UpdateSalesRepresentativeData")]
        public int UpdateSalesRepresentativeData([FromBody] SalesRepresentativeData salesRepresentativeData)
        {
            return _objSalesRepresentativeData.UpdateSalesRepresentativeData(salesRepresentativeData);
        }

        [HttpGet("SalesRepresentativeDetails/{salesRepresentativeId}")]
        public SalesRepresentativeData SalesRepresentativeDetails(int salesRepresentativeId)
        {
            return _objSalesRepresentativeData.GetSalesRepresentativeDataById(salesRepresentativeId);
        }

        [HttpGet]
        [Route("GetProductList")]
        public IEnumerable<Product> GetProductList()
        {
            return _objSalesRepresentativeData.GetProductList();
        }

        [HttpGet]
        [Route("GetPerformanceType")]
        public IEnumerable<Performance> GetPerformanceType()
        {
            return _objSalesRepresentativeData.GetPerformanceType();
        }

        [HttpGet]
        [Route("GetRegionList")]
        public IEnumerable<Region> GetRegions()
        {
            return _objSalesRepresentativeData.GetRegionList();
        }

        [HttpDelete]
        [Route("DeleteSalesRepresentative/{salesRepresentativeId}")]
        public int DeleteSalesRepresentative(int salesRepresentativeId)
        {
            return _objSalesRepresentativeData.DeleteSalesRepresentative(salesRepresentativeId);
        }
    }
}
