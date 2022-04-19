import React , { useEffect, useState } from 'react'
import styled from 'styled-components';
import plus from '../assets/plus.svg'
import del from '../assets/delete.svg'
import tick from '../assets/tick-green.svg'
import revert from '../assets/revert.svg'


function Todo(props) {
    const [id,setId]=useState(0)
    const [itemList ,setItemList] = useState([])
    const [userInput,setUserInput] = useState("")
    const [completeList,setCompletelist] = useState([])
    
      //use effect is used to get the current value of defined objects
      useEffect(()=>{
        setId(itemList.length)   
    },[])

    const reverter = (id,title) => {
        let new_ = {
            id:id,
            title:title
        }
        setItemList([...itemList,new_])
        let finalrevert = completeList.filter((final)=> final.id!==id)
        setCompletelist(finalrevert)
    }

    const addItemToList = () => {
        let newItems={
            id:id+1,
            title:userInput
        }
        setItemList([...itemList, newItems]);
        setUserInput("")
        setId((prev)=>prev+1)
    }
  
    let completedremove = (id) => {
        let completedelete = completeList.filter((complete) => complete.id!==id);
        setCompletelist(completedelete)
        console.log(completedelete)
    }
    let removeItem = (id) => {
        let new_Items_done = itemList.filter((item) =>item.id!==id);
        setItemList(new_Items_done);
    }
    const completeTask = (item,id) => {
        let completeItems={
            id:id,
            title:item.title
        }
        setCompletelist([...completeList, completeItems]);
        let tobe = itemList.filter((listcomp) => listcomp.id!==id);
        setItemList(tobe);
        
    }
    const listitems=itemList.map((item,key)=>
                <Parentlist key={key}>
                    <Circle onClick={()=>completeTask(item,item.id)}></Circle><Task>{item.id}.{item.title} <DelButton onClick={()=>removeItem(item.id)} ><DelImg  src={del}/></DelButton></Task>
                </Parentlist>
    )
    const completedList = completeList.map((item,key) =>
    <Parentlist key={key}>
      <img src={tick}/><Task>{item.id}.{item.title} <img src={revert} onClick={()=>reverter(item.id,item.title)}/><DelButton><DelImg src={del} onClick={()=>completedremove(item.id)}/></DelButton></Task>
      </Parentlist>
    )
    return(
    <>
        <Headline>My ToDo</Headline>
        <Secondhead>Things to be done</Secondhead>
        <Parentfirst>
        {listitems}
        </Parentfirst>
        <Contents>
        <Addbar value={userInput} type="text" onChange={ (e) => setUserInput(e.currentTarget.value)} placeholder="Enter task..."/>
            <Plusign>
                <PlusImage src={plus}/>
            </Plusign>
            <Buttonone href='#' onClick={addItemToList}>Add new</Buttonone>
        <Headingsecond>Things completed</Headingsecond>
        <>{completedList}</>
        </Contents>  
    </>

  )
}
const Task = styled.div`
    display: inline-block;
`
const Parentlist = styled.li`
    list-style: none;
    width: 20%;
    margin: 0 auto;
    text-align: left;
    display: flex;
    margin-bottom: 7px; 
    align-items: center;
    @media (max-width: 768px) {
        width:82%;
    }
`;
const Parentfirst = styled.ul`
`
const Circle = styled.div`
    border: 1px solid black;
    height: 21px;
    width: 22px;
    display: inline-block;
    text-align: center;
    border-radius: 10px;
`
const Revertag = styled.img`
`
const Ticktag = styled.img`
`
const DelImg = styled.img`
`
const CompletedList = styled.li`
`
const Headingsecond = styled.h2`
    text-align:center;
`
const Secondhead = styled.h4`
    text-align:center;
    width: 92%;
    display: inline-block;
`;
const Buttonone = styled.a`
    padding: 12px;
    background: #040241;
    color: #ffff;
    border-radius: 0px 10px 10px 0;
    position: relative;
    right: 14px;
    top: 3px;
    text-decoration:none;
`;
const Replay = styled.div `

`
const Addbar = styled.input`
    padding:13px;
    padding-left: 20px;
    border-radius: 8px;
`;
const DelButton = styled.a`
`;
const List = styled.li`
    list-style:none;
    
`;
const Headline = styled.h1`
    text-align:center;    
`;
const Contents = styled.div`
    margin-top:100px;
    text-align:center;
    position:relative;    
`;
const Plusign = styled.div`
    width: 1%;
    position: absolute;
    right: 58%;
    top: 14px;
`
const PlusImage = styled.img`
    display:block;
    width:100%
`
export default Todo