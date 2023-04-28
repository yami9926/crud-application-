
    // set global var
   let actionedit = '' //if click the edit btn then set var edit
   let actioneditindex = 0 
    //start section
    let section = document.createElement('section');

    document.body.style.backgroundImage = "url('img.jpg')";
    // document.body.style.backgroundImage.filter = "blur(70px)";
    // Create the employee form //
    let Employee = document.createElement("form");
    // style form //
    Employee.style.width = "400px";
    Employee.style.border = "2px solid #ccc";
    Employee.style.margin = "19px -48px 272px 403px";
    Employee.style.padding = "20px";
    Employee.style.borderRadius = "10px";
    Employee.style.textAlign = "center";
    Employee.style.backgroundColor = "#1361a3";
    Employee.style.color = "#EBEBEB";
    Employee.style.border = 'DodgerBlue'
    // Employee.style.fontStyle = "italic";

    // Add the "Employee Search" header to the form //
    let header = document.createElement('h1');
    header.textContent = " Add Employee ";
    Employee.appendChild(header);

    // Add the "Employee Id" label //
    let Emp = document.createElement('label');
    Emp.id = "Emplid";
    Emp.textContent = " Employee Id";
    Emp.style.fontSize = "22px";
    Employee.appendChild(Emp);

    // Add the "Employee Id" input field  //
    let EmployeeId = document.createElement("input");
    EmployeeId.id = "EmployeeId";
    EmployeeId.type = "Number";
    EmployeeId.name = "Number";
    EmployeeId.style.width = "90%";
    EmployeeId.style.height = "26px";
    EmployeeId.style.marginBottom = '10px'
    Employee.appendChild(EmployeeId);

    // Add the "Employee Name" label //
    let name = document.createElement('label');
    name.textContent = " Employee Name";
    name.style.fontSize = "22px";
    Employee.appendChild(name);

    // Add the "Employee Name" input field //
    let nameinput = document.createElement("input");
    nameinput.id = 'EmployeeName';
    nameinput.type = "text";
    nameinput.name = "Name";
    nameinput.style.width = "90%";
    nameinput.style.height = "26px";
    nameinput.style.marginBottom = '10px'
    Employee.appendChild(nameinput);

    // Add the "Email" label //
    let Email = document.createElement('label');
    Email.textContent = 'Email';
    Email.style.fontSize = "22px";
    Employee.appendChild(Email);

    // Add the "Email" input field //
    let Emailinput = document.createElement("input");
    Emailinput.id = 'Emailinput';
    Emailinput.type = "Email";
    Emailinput.name = "Email";
    Emailinput.style.marginBottom = '10px'
    Emailinput.style.width = "90%";
    Emailinput.style.height = "26px";
    Employee.appendChild(Emailinput);

    // Add the "Mobile No." label //
    let Mobile = document.createElement('label');
    Mobile.textContent = 'Mobile No.';
    Mobile.style.fontSize = "22px";
    Employee.appendChild(Mobile);

    // Add the "Mobile No." input field //
    let Mobileinput = document.createElement("input");
    Mobileinput.id = 'Mobileinput';
    Mobileinput.type = "Number";
    Mobileinput.name = "Number";
    Mobileinput.style.width = "90%";
    Mobileinput.style.height = "26px";
    Employee.appendChild(Mobileinput);

    // Add the "Submit" button //
    let buttonS = document.createElement('button');
    buttonS.id = 'buttonS';
    buttonS.type = 'button';
    buttonS.textContent = 'Submit';
    buttonS.style.marginTop = "20px";
    buttonS.style.fontSize = "17px";
    buttonS.style.width = '150px';
    buttonS.style.height = '30px';
    buttonS.style.color = "#1d6fb4";
    // buttonS.style.fontStyle = "italic";
    buttonS.style.borderRadius = "11px";
    buttonS.style.borderColor = "#1251b9";

    Employee.appendChild(buttonS);
    document.body.appendChild(Employee);

    //TABLE
    let elementTB = document.createElement("table");
    // style table //
    elementTB.style.backgroundColor = "#1361a3";
    elementTB.setAttribute('id', 'tblbody1');
    elementTB.style.height = "60px";
    elementTB.style.width = "700px";
    elementTB.style.margin = "-240px 50px 0px 293px";
    elementTB.style.color = "#EBEBEB";
    elementTB.style.textAlign = "justify";
    elementTB.style.fontStyle = "italic";
   
    //  let h1tag = document.createElement('h2');
    //  h1tag.textContent = 'Employee details'
    //  h1tag.style.fontSize = "25px";
  
    //  elementTB.appendChild(h1tag);
    // start tr header //
    let trheader = document.createElement('tr');
    
    
    // start Employee Id th //
    let Employeth = document.createElement('th');
    Employeth.textContent = "Employee Id";
    Employeth.style.fontSize = "20px";
    trheader.appendChild(Employeth);

    // strat Employee Name //
    let Empnameth = document.createElement('th');
    Empnameth.textContent = "Employee Name";
    Empnameth.style.fontSize = "20px";
    trheader.appendChild(Empnameth);

    // Email //
    let Emailth = document.createElement('th');
    Emailth.textContent = "Email";
    Emailth.style.fontSize = "20px";
    trheader.appendChild(Emailth);

    // Mobile no. //
    let Mobileth = document.createElement('th');
    Mobileth.textContent = 'Mobile No.';
    Mobileth.style.fontSize = "20px";
    trheader.appendChild(Mobileth);

    // Action //
    let actionth = document.createElement('th');
    actionth.textContent = "Action";
    actionth.style.fontSize = "20px";
    trheader.appendChild(actionth);
    // append table header
    elementTB.appendChild(trheader);

    // append table body
    tb = document.createElement('tbody');
    tb.setAttribute('id', 'tableBody');
    elementTB.appendChild(tb);

    // append table
    document.body.appendChild(elementTB);

    //start funs
    // get employee data
    displayEmployees()
    function displayEmployees() {
        let Empdata = []
        Empdata = JSON.parse(localStorage.getItem("employee")); //get employee data
        // console.log(Empdata)
        if (Empdata) { //check employee data is true or false
            let tableBody = document.getElementById("tableBody");
            let tbdata = "";
            for (let i = 0; i < Empdata.length; i++) {
                tbdata += `
                        <tr>
                        <th>${Empdata[i].EmployeeId}</th>
                        <th>${Empdata[i].EmployeeName}</th>
                        <th>${Empdata[i].Emailinput}</th> 
                        <th>${Empdata[i].Mobileinput}</th> 
                        <th><button onclick="editEmployee(${i})">Edit</button></th> 
                        <th><button onclick="deleteEmployee(${i})">Delete</button></th> 
                        </tr>`;
            }
            tableBody.innerHTML = tbdata; //passing innerhtml to tableBody
        }
        // <tr>
        //     <td></td>
        // <tr>
        // <tr>
        //     <td></td>
        // <tr>
    }
    // save employee data (submit data)
    function saveData() {
        // actionedit and actioneditindex both are global var
        if (actionedit === 'edit') { //if click edit btn then after this condition is true
            // edit employee data 
            let employee_records = JSON.parse(localStorage.getItem("employee"));
            let id, name, email, mobile
          // changes data 
            EmployeeId = document.getElementById("EmployeeId").value;
            EmployeeName = document.getElementById("EmployeeName").value;
            Emailinput = document.getElementById("Emailinput").value;
            Mobileinput = document.getElementById("Mobileinput").value; 
           
            // Empdata[indexnumber] = updatedobj
              //   abc = [ {"a":b}];
              employee_records[actioneditindex] = { EmployeeId, EmployeeName, Emailinput, Mobileinput }
            console.log("after update",employee_records,employee_records[actioneditindex]); 

            localStorage.setItem("employee", JSON.stringify(employee_records)); //set EmpData
            actionedit = '' //reset actionedit
            actioneditindex = 0 //reset actioneditindex
            console.log(actionedit,actioneditindex)
            // Clear input fields
            document.getElementById("EmployeeId").value = '';
            document.getElementById("EmployeeName").value = '';
            document.getElementById("Emailinput").value = '';
            document.getElementById("Mobileinput").value = '';
        } else {
            // add employee data
            let id, name, email, mobile;
            id = document.getElementById("EmployeeId").value;
            name = document.getElementById("EmployeeName").value;
            email = document.getElementById("Emailinput").value;
            mobile = document.getElementById("Mobileinput").value;
            let employee_records = JSON.parse(localStorage.getItem("employee")) || [];
            employee_records.push({
                "EmployeeId": id,
                "EmployeeName": name,
                "Emailinput": email,
                "Mobileinput": mobile
            });
            console.log(employee_records);
            localStorage.setItem("employee", JSON.stringify(employee_records));
            // Clear input fields
            document.getElementById("EmployeeId").value = '';
            document.getElementById("EmployeeName").value = '';
            document.getElementById("Emailinput").value = '';
            document.getElementById("Mobileinput").value = '';
        }
        displayEmployees();
    }
    buttonS.onclick = saveData;




    displayEmployees()
   


    // delete employee data
    function deleteEmployee(empIndex) {
        if (confirm('Are you sure! you want to delete.')) {
            console.log("Delete", empIndex);
            let Empdata = JSON.parse(localStorage.getItem("employee"));
            // Delete Empdata element from the array
            Empdata.splice(empIndex, 1);
            localStorage.setItem('employee', JSON.stringify(Empdata));
            displayEmployees();
        }
    }
    // edit employee data
    function editEmployee(empIndex) { //passing index
        actionedit = 'edit' //set edit str in global var
        actioneditindex = empIndex //set emp data index in global var
        console.log(actionedit, actioneditindex)
        let Empdata = JSON.parse(localStorage.getItem("employee"));
        let employee = Empdata[empIndex];
        document.getElementById("EmployeeId").value = employee.EmployeeId;
        document.getElementById("EmployeeName").value = employee.EmployeeName;
        document.getElementById("Emailinput").value = employee.Emailinput;
        document.getElementById("Mobileinput").value = employee.Mobileinput;
        console.log("before update", Empdata);// 
        displayEmployees();
    }
