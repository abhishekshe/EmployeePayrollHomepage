
window.addEventListener('DOMContentLoaded',(event)=>{
    
    const name= document.querySelector('#name');
    const textError= document.querySelector('.name-error');
    //adding event listener for name input and defining function for the same
    name.addEventListener('input',function(){
        //if name length is 0, then no error message is printed
        if(name.value.length==0)
        {
            textError.textContent="";
            return;
        }
        try{
            //passing name values in employee payroll data class object and name property and checing if exception is thrown
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }
        catch(e)
        {
            //passing exception message to texterror const.
            textError.textContent=e;
        }
    });
    //adding event listener for salary and changing salary output for every salary input made through scrolling
    const salary= document.querySelector('#salary');
    const output= document.querySelector('.salary-output');
    //showing the output equal to salary initially.
    output.textContent=salary.value;
    //adding event listenr for salary and printing the salary for each input dynamically.
    salary.addEventListener('input',function(){
    output.textContent=salary.value;
    });
    //method to validate date if, entered in correct range and do not represent future range
    dateError= document.querySelector(".date-error");
    var year= document.querySelector('#year');
    var month= document.querySelector('#month');
    var day=document.querySelector('#day');
    //as year, month or day any input may be changed from user, hence all 3 event listneres are defined
    year.addEventListener('input',checkDate);
    month.addEventListener('input',checkDate);
    day.addEventListener('input',checkDate)
    //calling checkDate method from event listeners
    function checkDate(){ 
    try
    {   
       
        let dates= getInputValueById("#day")+" "+getInputValueById("#month")+" "+getInputValueById("#year");
        //dates is parsed to date and passed to object of employee payroll data class - start date
        dates=new Date(Date.parse(dates));
        (new EmployeePayrollData()).startDate=dates;
        //if condition is not satisfied, then error is thrown and catched by try-catch block
        dateError.textContent="";
    }
    catch(e)
    {
        dateError.textContent=e;
    }

}

});

const save=()=>{
    try
    {
       
        let employeePayrollData= createEmployeePayroll();
        //passing employeepayrolldata object to create and update storage method to add it into local storage
        createAndUpdateStorage(employeePayrollData);
    }
    catch(e)
    {
        return;
    }
}
//calling function to add data into local storage
function createAndUpdateStorage(employeePayrollData){
    
    
    let employeePayrollList= JSON.parse(localStorage.getItem("EmployeePayrollList"));
    
    if(employeePayrollList!=undefined)
    {
        employeePayrollList.push(employeePayrollData);
    }
    else
    {
        //if first time element is being added, then employeepayrolllist array is created with one element of employeepayroll data 
        employeePayrollList=[employeePayrollData];
    }
    //popup showing the data
    alert(employeePayrollList.toString());
  
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

//method to create employee payroll object from data entered in form and submitted thereafter.
const createEmployeePayroll=()=>{
    //creating object of employeepayrolldata
    let employeePayrollData= new EmployeePayrollData();
    try
    {
       
        employeePayrollData.name= getInputValueById('#name');
    }
    catch(e)
    {
        
        setTextValue('.name-error',e)
    }
   
    employeePayrollData.profilePic= getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender= getSelectedValues('[name=gender]').pop();
    employeePayrollData.department=getSelectedValues('[name=department]');
    employeePayrollData.salary= getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
   
    let date= getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayrollData.startDate= new Date(Date.parse(date));
    
    alert(employeePayrollData.toString());
   
    return employeePayrollData;
}


const getSelectedValues=(propertyValue)=>{

    let allItems= document.querySelectorAll(propertyValue);
    let selItems=[];
    
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id)=>
{
    let value= document.querySelector(id).value;
    return value;
}

const getInputElementValue=(id)=>{
    let value= document.getElementById(id).value;
    return value;
}

const resetForm=()=>{
    
    setValue('#name','');
   
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day',1);
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues= (propertyValue)=>{
    let allItems= document.querySelectorAll(propertyValue);
    
    allItems.forEach(items=>{
        items.checked=false;
    });
}

const setTextValue=(id,value)=>
{
    const element= document.querySelector(id);
    element.textContent=value;
}

const setValue=(id,value)=>
{
    const element= document.querySelector(id);
    element.value=value;
}