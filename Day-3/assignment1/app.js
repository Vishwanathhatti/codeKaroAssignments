 // Assignment 1

    function getRandomColor() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`;
    }
    function changeBackgroundColor() {
      let randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    }
    document.onclick = function() {
      changeBackgroundColor();
    };