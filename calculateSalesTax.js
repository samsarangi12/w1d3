  var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };

  var companySalesData = [
    {
      name: "Telus",
      province: "BC",
      sales: [ 100, 200, 400 ]
    },
    {
      name: "Bombardier",
      province: "AB",
      sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
      name: "Telus",
      province: "SK",
      sales: [ 500, 100 ]
    }
  ];


  function calculateSalesTax(salesData, taxRates) {

    var outputObject = {};

    for (var i = 0; i < salesData.length; i++) {
      var firmName = salesData[i]['name'];
      var firmProvince = salesData[i]['province'];
      var firmSales = salesData[i]['sales'];
      var taxRate = 0.00
      var provincialSales = 0
      var provincialTax = 0
      for(var prov in taxRates) {
        if (prov === firmProvince) {
          taxRate = taxRates[prov];
        }
      }

      for (var j = 0; j < firmSales.length; j++) {
        provincialSales += firmSales[j];
      }

      provincialTax = provincialSales * taxRate

      if (!outputObject[firmName]) {
        outputObject[firmName] = {};
        outputObject[firmName]['totalSales'] = provincialSales;
        outputObject[firmName]['totalTaxes'] = provincialTax;
      }
      else {
        outputObject[firmName]['totalSales'] += provincialSales;
        outputObject[firmName]['totalTaxes'] += provincialTax;
      }

    }

    return outputObject;

  }

  var results = calculateSalesTax(companySalesData, salesTaxRates);
  console.log("Expected Results: ", results)

  /* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */