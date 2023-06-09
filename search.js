//search bar constants
const searchBar = document.querySelector('#search-bar');
const studentList = document.querySelector('#list').getElementsByTagName('li');

//convert capital to small letter and vice versa for comparison and better search
searchBar.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  for (const student of studentList) {
    const studentName = student.textContent.toLowerCase();
    //if the name doesn't match any name in the list hide it
    if (!studentName.includes(searchTerm)) {
      student.style.display = 'none';
      //If the name exists show it
    } else {
      student.style.display = '';
    }
  }
});