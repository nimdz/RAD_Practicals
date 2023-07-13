class Employee{

    constructor(EmployeeNo,name,address,contactno,NIC,joineddate,designation,salary){
      this.EmployeeNo=EmployeeNo;
      this.name=name;
      this.address=address;
      this.contactno=contactno;
      this.NIC=NIC;
      this.joineddate=joineddate;
      this.designation=designation;
      this.salary=salary;
    }

    reportDuty(time){
      document.write(`Arrives at ${time}`+'<br>');
      
    }
    leavetDuty(time){
      document.write(`Leaves at ${time}`+'<br>');
      
    }

}

class PermanentEmployee extends Employee{

    constructor(EmployeeNo,name,address,contactno,NIC,joineddate,designation,salary){
        super(EmployeeNo,name,address,contactno,NIC,joineddate,designation,salary);

    }

}

class ContractEmployee extends Employee{

    constructor(EmployeeNo,name,address,contactno,NIC,joineddate,designation,salary,duration){
        super(EmployeeNo,name,address,contactno,NIC,joineddate,designation,salary);
        this.duration=duration;

    }

    requestExtension(extensionMonths){
       if(extensionMonths<=3){
            this.duration+=extensionMonths;
            document.write(`Extension requested for ${extensionMonths} months.`+'<br>');
        }
        else{
            document.write("Extension request exceeds maximum allowed period.");

        }
    }
}

class TemporaryEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary, duration) {
      super(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary);
      this.duration = duration; 
    }
  
    requestExtension(extensionMonths) {
      if (extensionMonths <= 3) {
        this.duration += extensionMonths;
        document.write(`Extension requested for ${extensionMonths} months.`+'<br>');
      } else {
        document.write("Extension request exceeds maximum allowed period.");
      }
    }
  }

  const permanentEmp = new PermanentEmployee(1, "John Doe", "123 Main St", "123-456-7890", "ABC123", "2021-01-01", "Manager", 5000);
  permanentEmp.reportDuty("9:00 AM");
  permanentEmp.leaveDuty("5:00 PM");
  
  const contractEmp = new ContractEmployee(2, "Jane Smith", "456 Elm St", "987-654-3210", "XYZ789", "2022-01-01", "Developer", 3000, 12);
  contractEmp.requestExtension(2);
  contractEmp.reportDuty("9:30 AM");
  contractEmp.leaveDuty("6:00 PM");
  
  const temporaryEmp = new TemporaryEmployee(3, "Bob Johnson", "789 Oak St", "555-123-4567", "DEF456", "2023-01-01", "Intern", 2000, 6);
  temporaryEmp.requestExtension(1);
  temporaryEmp.reportDuty("10:00 AM");
  temporaryEmp.leaveDuty("4:00 PM");
  