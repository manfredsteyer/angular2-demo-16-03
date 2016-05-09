describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('should load page and read title', function() {

        var link = element(by.linkText("Buchen"));
        link.click();

        var vonFilter = element(by.name("von"));
        var nachFilter = element(by.name("nach"));
        var suchen = element(by.css("input[type=button]"));

        vonFilter.clear();
        nachFilter.clear();
       
        vonFilter.sendKeys("Graz");

        nachFilter.sendKeys("Ha");
        nachFilter.sendKeys("m");
        nachFilter.sendKeys("bu");
        nachFilter.sendKeys("rg");
        
        suchen.click();
        
        browser.sleep(4000);
        
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'info.png');
        });
        
        var divs = element.all(by.css(".flug-card"));
        //var trs = table.all(by.tagName("tr"));
        var ps = divs.all(by.tagName("p"));
        var p1 = ps.first();
        var p2 = ps.get(1);

        //var firstRow = trs.get(0);
        //var tds = firstRow.all(by.tagName("td"));
        //var firstTd_Id = tds.first();

        expect(divs.count()).toBe(3);
        expect(p1.getText()).toMatch(/1/);
        expect(p2.getText()).toMatch(/Datum/);
        //expect(firstTd_Id.getText()).toBe("1");
 
    });
    
    function writeScreenShot(data, filename) {
        
        var fs = require("fs");
        
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
});


