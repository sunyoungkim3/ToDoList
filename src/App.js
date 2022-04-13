import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
//수정하는 함수를 사용 할 때 두가지 옵션
    setToDo("") //직접 값을 입력
    setToDos((currentArray) =>[toDo, ...currentArray]); 
    //함수를 보내는 방법 첫번째 인자: 현재 State. 이를 이용하여 새로운 State를 만드는데 사용
    // 현재 toDos를 불러와서 새로운 toDo의 array로 return

  }; 

  console.log(toDos);

  return (
    <div>
      <h1>MY TO DOs ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>ADD TO DO</button>
      </form>
      <hr />
      {toDos.map((item, index)=> (
      <li key={index}>{item}</li>
      ))}  

      {/* map: array에 있는 item을 내가 원하는것으로 바꿔주는 역할. 새로운 array로 return 해줌 */}
      {/* map((item)=>" "), 첫번째 인자에 item을 받아올 수 있음*/}

    </div>
  );
}

export default App;
