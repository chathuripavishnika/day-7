let customerList = [];
let itemList = [];

function addCustomerOnAction() {

    console.log("Add Customer");

    let txtName = document.getElementById("txtName").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtSalary = document.getElementById("txtSalary").value;
    let txtCotact = document.getElementById("txtCotact").value;

    console.log(txtName);
    console.log(txtAge);
    console.log(txtAddress);
    console.log(txtSalary);
    console.log(txtCotact);

    //let customer = {}

    customerList.push(
        {
            name:txtName,
            age:txtAge,
            addres:txtAddress,
            salary:txtSalary,
            cantact:txtCotact


        }
    );

   
    

    console.log(customerList);

    let body="";

    for(let customer of customerList){
        body+= `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.age}</td>
                <td>${customer.addres}</td>
                <td>${customer.salary}</td>
                <td>${customer.cantact}</td>
            </tr>
        
        `
    }

    console.log(body);
    document.getElementById("tblCoustomer").innerHTML = body;

    // access object in objects complex senaryo

    let customer = {
        name: "kamal",
        age: "15",
        cantact: {
            contactNo: "0771551799",
            data: {
                sample: "0001",
                test01: {
                    vm:"200kp",
                    bm:"100lp"
                }
            }
        },
        orders: [
            {
              name: "egg bun",
              qtyOnHand: 5,
              unitprice: 150  
            },
            {
              name: "veg bun",
              qtyOnHand: 6,
              unitprice: 100   
            }

        ]
    }
    console.log(customer.orders[0].unitprice);


}



function addItemOnAction() {

    console.log("Add Item");

    let txtName = document.getElementById("txtName").value;
    let txtQun = document.getElementById("txtQun").value;
    let txtPrice = document.getElementById("txtPrice").value;
    let txtmaDate = document.getElementById("txtmaDate").value;
    let txtExpdate = document.getElementById("txtExpdate").value;

    console.log(txtName);
    console.log(txtQun);
    console.log(txtPrice);
    console.log(txtmaDate);
    console.log(txtExpdate);

    //let item = {}

    itemList.push(
        {
            name:txtName,
            qun:txtQun,
            price:txtPrice,
            mdate:txtmaDate,
            edate:txtExpdate


        }
    );
    

    console.log(itemList);

    let body="";

    for(let item of itemList){
        body+= `
            <tr>
                <td>${item.name}</td>
                <td>${item.qun}</td>
                <td>${item.price}</td>
                <td>${item.mdate}</td>
                <td>${item.edate}</td>
            </tr>
        
        `
    }

    console.log(body);
    document.getElementById("tblItem").innerHTML = body;


}