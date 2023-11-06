import React, { useState } from 'react';
import './App.css';
import Listcard from './component/Listcard';
import Donecard from './component/Donecard';

const App = () => {

  const [todolist, setTodoList] = useState([
    { id: 1, title: "리액트 공부하기", detail: "리액트 입문 강의 듣기", isDone: false },
    { id: 2, title: "리액트 공부하기", detail: "리액트 입문 과제 하기", isDone: false },
  ])

  const [title, setTitle] = useState(""); // 제목
  const [detail, setDetail] = useState(""); // 내용

  const [doneList, setDoneList] = useState([])

  const addTitleHandler = (event) => {
    setTitle(event.target.value)
  };

  const addContentHandler = (event) => {
    setDetail(event.target.value)
  };


  // 추가 버튼 클릭
  const clickAddBtnHandler = () => {
    const addList = {
      id: todolist.length + 1,
      title,
      detail,
      isDone: false,
    };
    if (title === '') {
      alert('제목을 입력하세요')
    } else if (detail === '') {
     alert('내용을 입력하세요')
    } else {
      setTodoList([...todolist, addList]);
    }
  }


  // 삭제 버튼 클릭
  const clickRemoveBtnHandler = (id) => {
    const addList = todolist.filter(function (todolist) {
      return todolist.id !== id;
    });
    setTodoList(addList);
  }

    // 완료 버튼 클릭
  const clickFinishBtnHandler = (id) => {
    const addlist = todolist.find((list) => list.id === id)
    if (addlist.isDone === false) {
      addlist.isDone = true
    }
    setDoneList([...doneList, addlist]);
    clickRemoveBtnHandler(id)
  }

  // 완료 삭제 버튼 클릭
  const clickDoneRemoveBtnHandler = (id) => {
    const addList = doneList.filter(function (doneList) {
      return doneList.id !== id;
    });
    setDoneList(addList);
  }

  // 완료 취소 버튼 클릭
  const clickDoneCancelBtnHandler = (id) => {
    const addlist = doneList.find((list) => list.id === id)
    if (addlist.isDone === true) {
      addlist.isDone = false
    }
    setTodoList([...todolist, addlist])
    clickDoneRemoveBtnHandler(id);
  }

  return (
    <div className="total">
      <header className="header">
        <h1>My Todo List</h1>
      </header>
      <div className='titleBox'>
        <span className='title'>제목</span>
        <input className='input' value={title} onChange={addTitleHandler} />
        <span className='content'>내용</span>
        <input className='input' value={detail} onChange={addContentHandler} />
        <button className='addbtn' onClick={clickAddBtnHandler}>추가하기</button>
      </div>
      <div>
        <span className='working'>Working</span>
        <div className='container'>
          {
            todolist.map(function (item) {
              return (
                <Listcard item={item} clickFinishBtnHandler={clickFinishBtnHandler} clickRemoveBtnHandler={clickRemoveBtnHandler}/>
              )
            })
          }
        </div>
        <div>
          <span className='done'>Done</span>
          <div className='container'>
            {
              doneList.map(function (item) {
                return (
                  <Donecard item={item} clickDoneCancelBtnHandler={clickDoneCancelBtnHandler} clickDoneRemoveBtnHandler={clickDoneRemoveBtnHandler}/>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
};

export default App;