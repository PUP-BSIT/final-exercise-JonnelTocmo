function toggleMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const bars = document.querySelectorAll('.bar');
  
    hamburgerMenu.classList.toggle('active');
  
    bars.forEach(bar => {
      bar.classList.toggle('active');
    });
  
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
  }
  
  window.onclick = function (event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
      hamburgerMenu.classList.remove('active');
      document.querySelectorAll('.bar').forEach(bar => bar.classList.remove('active'));
      dropdownMenu.classList.remove('show');
    }
  };

  const comments = JSON.parse(localStorage.getItem('comments')) || [];

  function buttonToggle() {
      const nameInput = document.querySelector("#name").value.trim();
      const commentBox = document.querySelector("#comment").value.trim();
      const commentButton = document.querySelector("#comment_button");
  
      if (nameInput.length && commentBox.length) {
          commentButton.disabled = false;
      } else {
          commentButton.disabled = true;
      }
  }
  
  function addComment() {
      const onInputName = document.querySelector('#name').value;
      const onInputMessage = document.querySelector('#comment').value;
  
      const newComment = {
          name: onInputName,
          message: onInputMessage,
          date: new Date()
      };
  
      comments.push(newComment);
  
      localStorage.setItem('comments', JSON.stringify(comments));
  
      comments.sort((a, b) => b.date - a.date);
  
      renderComments();
  
      document.querySelector('#name').value = '';
      document.querySelector('#comment').value = '';
  }
  
  function sortComments(order) {
      if (order === 'asc') {
          comments.sort((a, b) => a.date - b.date);
      } else if (order === 'desc') {
          comments.sort((a, b) => b.date - a.date);
      }
      renderComments();
  }
  
  function renderComments() {
      const commentSection = document.querySelector('#comment_list');
  
      commentSection.innerHTML = '';
  
      comments.forEach(comment => {
          const commentElement = document.createElement('p');
          commentElement.textContent = `${comment.name}: ${comment.message}`;
          commentSection.appendChild(commentElement);
      });
  }