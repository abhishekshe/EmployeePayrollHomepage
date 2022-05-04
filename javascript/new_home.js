window.addEventListener('DOMContentLoaded',(event)=>
{
    createInnerHtml();
});

const createInnerHtml=()=>
{
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    //using template literal
    const innerHTML= `${headerHtml}
    <tr>
          <td><img class="profile" alt="" src="C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\profile-images\Ellipse -2.png"></td>
          <td>Abhishek narwariya</td>
          <td>Male</td>
          <td><div class='dept-label'>Engineer</div>
              <div class="dept-label">Finance</div>
          </td>
          <td>30000</td>
          <td>18 September 2020</td>
          <td><img id="1" onclick= "remove(this)" alt="delete" src="C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\icons\delete-black-18dp.svg">
            <img id="1" onclick= "update(this)" alt="edit" src="C:\Users\abhis\OneDrive\Desktop\Day47\ASSETS\assets\icons\create-black-18dp.svg"></td>
    </tr>`;
    document.querySelector('#table-display').innerHTML=innerHTML;
}