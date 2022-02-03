import './App.css';

function App() {

  const handleClick = (e) => {
    e.preventDefault();

    fetch('http://dummy.restapiexample.com/api/v1/employee/1')
    .then(response => response.json())
    .then(json => console.log(json))

    // var xhr = new XMLHttpRequest();
    // //open -type , url/file, async
    // xhr.open('get', 'http://dummy.restapiexample.com/api/v1/employee/1', true);
    

    // xhr.onload = function () {
    //   if(this.status === 200) {
    //     console.log('responseText');
    //   }
    // }

    // xhr.onreadystatechange = function () {
    //   if(this.readystate === 4 && this.status === 200) {
    //     console.log(this.responseText)
    //   }
    // }

    //HTTP Statuses
    //200: 'OK'
    //403: "Forbidden"
    //404: "Not Found"

    //readystate values
    //0: request not initialized
    //1: server connection estabilished
    //2: request recieved
    //3: processing request
    //4: request finished and response is
  }

  return (
    <div className="App">
      <button onClick={handleClick}>get data</button>
    </div>
  );
}

export default App;
