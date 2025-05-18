using Microsoft.AspNetCore.Mvc;
using Moq;
using SalesRepresentative_API.Controllers;
using SalesRepresentative_API.Interface;
using SalesRepresentative_API.Models;
using Xunit;

namespace SalesRepresentative.Tests.Controllers
{
    public class SalesRepresentativeTestsController
    {
        private readonly Mock<ISalesRepresentativeDataAccessLayer> _mockDal;
        private readonly SalesRepresentativeController _controller;

        public SalesRepresentativeTestsController()
        {
            _mockDal = new Mock<ISalesRepresentativeDataAccessLayer>();
            _controller = new SalesRepresentativeController(_mockDal.Object);
        }

        [Fact]
        public void GetAllSalesRepresentativeData_ReturnsData()
        {
            var data = new List<SalesRepresentativeData> { new SalesRepresentativeData() };
            _mockDal.Setup(d => d.GetAllSalesRepresentativeData()).Returns(data);

            var result = _controller.GetAllSalesRepresentativeData();

            Assert.NotNull(result);
        }

        [Fact]
        public void AddSalesRepresentativeData_ReturnsId()
        {
            var newRep = new SalesRepresentativeData();
            _mockDal.Setup(d => d.AddSalesRepresentativeData(newRep)).Returns(1);

            var result = _controller.AddSalesRepresentativeData(newRep);

            Assert.Equal(1, result);
        }

        [Fact]
        public void UpdateSalesRepresentativeData_ReturnsSuccess()
        {
            var updateRep = new SalesRepresentativeData();
            _mockDal.Setup(d => d.UpdateSalesRepresentativeData(updateRep)).Returns(1);

            var result = _controller.UpdateSalesRepresentativeData(updateRep);

            Assert.Equal(1, result);
        }

        [Fact]
        public void SalesRepresentativeDetails_ReturnsCorrectData()
        {
            var rep = new SalesRepresentativeData { SalesRepresentative_ID = 5 };
            _mockDal.Setup(d => d.GetSalesRepresentativeDataById(5)).Returns(rep);

            var result = _controller.SalesRepresentativeDetails(5);

            Assert.Equal(5, result.SalesRepresentative_ID);
        }

        [Fact]
        public void GetProductList_ReturnsProducts()
        {
            var products = new List<Product> { new Product() };
            _mockDal.Setup(d => d.GetProductList()).Returns(products);

            var result = _controller.GetProductList();

            Assert.NotNull(result);
        }

        [Fact]
        public void GetPerformanceType_ReturnsPerformanceTypes()
        {
            var performance = new List<Performance> { new Performance() };
            _mockDal.Setup(d => d.GetPerformanceType()).Returns(performance);

            var result = _controller.GetPerformanceType();

            Assert.NotNull(result);
        }

        [Fact]
        public void GetRegions_ReturnsRegions()
        {
            var regions = new List<Region> { new Region() };
            _mockDal.Setup(d => d.GetRegionList()).Returns(regions);

            var result = _controller.GetRegions();

            Assert.NotNull(result);
        }

        [Fact]
        public void DeleteSalesRepresentative_ReturnsSuccess()
        {
            _mockDal.Setup(d => d.DeleteSalesRepresentative(1)).Returns(1);

            var result = _controller.DeleteSalesRepresentative(1);

            Assert.Equal(1, result);
        }
    }
}
