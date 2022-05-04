window.addEventListener('DOMContentLoaded',(event)=>
{
    createInnerHtml();
});

const createInnerHtml=()=>
{
    const headerHtml= "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    //using template literal
    let innerHtml= `${headerHtml}`;
    let empPayrollList= createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
    innerHtml= `${innerHtml}
    <tr>
          <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>${getDeptHtml(empPayrollData._department)}
          </td>
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td><img id="${empPayrollData._id}" onclick= "remove(this)" alt="delete" src="C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\icons\delete-black-18dp.svg">
            <img id="${empPayrollData.id}" onclick= "update(this)" alt="edit" src="C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\icons\create-black-18dp.svg"></td>
    </tr>`;
    }
    document.querySelector('#table-display').innerHTML=innerHTML;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {       
        _name: 'Harish',
        _gender: 'male',
        _department: [
            'Engineering',
            'Finance'
        ],
        _salary: '500000',
        _startDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: 'C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\profile-images\Ellipse -3.png'
      },
      {
        _name: 'Kumar',
        _gender: 'female',
        _department: [
            'Sales'
        ],
        _salary: '400000',
        _startDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: 'C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\profile-images\Ellipse -1.png'
      }
    ];
    return empPayrollListLocal;
  }

  const getDeptHtml= (deptList)=>
  {
      let deptHtml='';
      for(const dept of deptList)
      {
          deptHtml= `${deptHtml}<div class="dept-label">${dept}</div>`
      }
      return deptHtml;
  }