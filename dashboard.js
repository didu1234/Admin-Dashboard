// Sample user data (you can replace this with your data)
const userData = [
    {
        "id": "1",
        "name": "Aaron Miles",
        "email": "aaron@mailinator.com",
        "role": "member"
    },
    {
        "id": "2",
        "name": "Aishwarya Naik",
        "email": "aishwarya@mailinator.com",
        "role": "member"
    },
    {
        "id": "3",
        "name": "Arvind Kumar",
        "email": "arvind@mailinator.com",
        "role": "admin"
    },
    {
        "id": "4",
        "name": "Caterina Binotto",
        "email": "caterina@mailinator.com",
        "role": "member"
    },
    {
        "id": "5",
        "name": "Chetan Kumar",
        "email": "chetan@mailinator.com",
        "role": "member"
    },
    {
        "id": "6",
        "name": "Jim McClain",
        "email": "jim@mailinator.com",
        "role": "member"
    },
    {
        "id": "7",
        "name": "Mahaveer Singh",
        "email": "mahaveer@mailinator.com",
        "role": "member"
    },
    {
        "id": "8",
        "name": "Rahul Jain",
        "email": "rahul@mailinator.com",
        "role": "admin"
    },
    {
        "id": "9",
        "name": "Rizan Khan",
        "email": "rizan@mailinator.com",
        "role": "member"
    },
    {
        "id": "10",
        "name": "Sarah Potter",
        "email": "sarah@mailinator.com",
        "role": "admin"
    },
    {
        "id": "11",
        "name": "Keshav Muddaiah",
        "email": "keshav@mailinator.com",
        "role": "member"
    },
    {
        "id": "12",
        "name": "Nita Ramesh",
        "email": "nita@mailinator.com",
        "role": "member"
    },
    {
        "id": "13",
        "name": "Julia Hunstman",
        "email": "julia@mailinator.com",
        "role": "member"
    },
    {
        "id": "14",
        "name": "Juan Alonso",
        "email": "juan@mailinator.com",
        "role": "admin"
    },
    {
        "id": "15",
        "name": "Gabriel Montoya",
        "email": "gabriel@mailinator.com",
        "role": "admin"
    },
    {
        "id": "16",
        "name": "Beatrice Iglesias",
        "email": "beatrice@mailinator.com",
        "role": "admin"
    },
    {
        "id": "17",
        "name": "Sarah Symms",
        "email": "sarah.s@mailinator.com",
        "role": "admin"
    },
    {
        "id": "18",
        "name": "Patrick Pinheiro",
        "email": "patrick@mailinator.com",
        "role": "admin"
    },
    {
        "id": "19",
        "name": "Anand Patel",
        "email": "anand@mailinator.com",
        "role": "member"
    },
    {
        "id": "20",
        "name": "Kishore Kalburgi",
        "email": "kishore@mailinator.com",
        "role": "member"
    },
    {
        "id": "21",
        "name": "Rebecca Norris",
        "email": "rebecca@mailinator.com",
        "role": "member"
    },
    {
        "id": "22",
        "name": "Özgür Başak",
        "email": "ozgur@mailinator.com",
        "role": "member"
    },
    {
        "id": "23",
        "name": "Robin Andersen",
        "email": "robin@mailinator.com",
        "role": "member"
    },
    {
        "id": "24",
        "name": "Nandini Kumar",
        "email": "nandini@mailinator.com",
        "role": "member"
    },
    {
        "id": "25",
        "name": "Nikita Smith",
        "email": "nikita@mailinator.com",
        "role": "member"
    },
    {
        "id": "26",
        "name": "Colton Doe",
        "email": "colton@mailinator.com",
        "role": "member"
    },
    {
        "id": "27",
        "name": "Alain Senna",
        "email": "alain@mailinator.com",
        "role": "member"
    },
    {
        "id": "28",
        "name": "Ashwin Jain",
        "email": "ashwin@mailinator.com",
        "role": "member"
    },
    {
        "id": "29",
        "name": "Seema Bhatt",
        "email": "seema@mailinator.com",
        "role": "member"
    },
    {
        "id": "30",
        "name": "Kayla Scarpinski",
        "email": "kayla@mailinator.com",
        "role": "member"
    },
    {
        "id": "31",
        "name": "Ajay Ghosh",
        "email": "ajay@mailinator.com",
        "role": "member"
    },
    {
        "id": "32",
        "name": "Chris Lindberg",
        "email": "chris@mailinator.com",
        "role": "member"
    },
    {
        "id": "33",
        "name": "Christina Mourujärvi",
        "email": "christina@mailinator.com",
        "role": "member"
    },
    {
        "id": "34",
        "name": "Mikhail Bill",
        "email": "mikhail@mailinator.com",
        "role": "member"
    },
    {
        "id": "35",
        "name": "Eino Göregen",
        "email": "eino@mailinator.com",
        "role": "member"
    },
    {
        "id": "36",
        "name": "Zachariah Johansson",
        "email": "zacharaiah@mailinator.com",
        "role": "member"
    },
    {
        "id": "37",
        "name": "Aimaan Mohammed",
        "email": "aimaan@mailinator.com",
        "role": "admin"
    },
    {
        "id": "38",
        "name": "Aika Tsunoda",
        "email": "aika@mailinator.com",
        "role": "member"
    },
    {
        "id": "39",
        "name": "Kimiko Minamoto",
        "email": "kimiko@mailinator.com",
        "role": "member"
    },
    {
        "id": "40",
        "name": "Alyona Baginskaite",
        "email": "alyona@mailinator.com",
        "role": "member"
    },
    {
        "id": "41",
        "name": "Anirudh Mukherjee",
        "email": "anirudh@mailinator.com",
        "role": "member"
    },
    {
        "id": "42",
        "name": "Alyona Gov",
        "email": "alyonagov@mailinator.com",
        "role": "member"
    },
    {
        "id": "43",
        "name": "Robin Singh",
        "email": "robin@mailinator.com",
        "role": "member"
    },
    {
        "id": "44",
        "name": "Vijay Vasudevan",
        "email": "vijayv@mailinator.com",
        "role": "member"
    },
    {
        "id": "45",
        "name": "Steve Smith",
        "email": "steve@mailinator.com",
        "role": "member"
    },
    {
        "id": "46",
        "name": "Anirudh Banerjee",
        "email": "anirudhb@mailinator.com",
        "role": "member"
    }
    // ... (Your provided user data here)
  ];
  
  // Function to render user data in the dashboard
  function renderUserList(data) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    data.forEach(user => {
      const row = document.createElement('tr');
  
      const checkboxCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = user.id; // Use a unique identifier as the checkbox value
      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);
  
      const nameCell = document.createElement('td');
      nameCell.textContent = user.name;
      row.appendChild(nameCell);
  
      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;
      row.appendChild(emailCell);
  
      const roleCell = document.createElement('td');
      roleCell.textContent = user.role;
      row.appendChild(roleCell);
  
      const actionCell = document.createElement('td');
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      // Add event listener for edit action (you can implement your logic here)
      editButton.addEventListener('click', () => {
        // Handle edit action
        console.log(`Edit user: ${user.name}`);
      });
      actionCell.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      // Add event listener for delete action (you can implement your logic here)
      deleteButton.addEventListener('click', () => {
        // Handle delete action
        console.log(`Delete user: ${user.name}`);
      });
      actionCell.appendChild(deleteButton);
  
      row.appendChild(actionCell);
  
      userList.appendChild(row);
    });
  }
  
  // Filter user data by name
  function filterUsersByName(inputValue) {
    const filteredUsers = userData.filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase()));
    renderUserList(filteredUsers);
  }
  
  // Event listener for search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    filterUsersByName(searchInput.value);
  });
  
  // Event listener for select all checkbox
  const selectAllCheckbox = document.getElementById('selectAll');
  selectAllCheckbox.addEventListener('change', () => {
    const checkboxes = document.querySelectorAll('#userList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });
  
  // Initial render of user list
  renderUserList(userData);
  