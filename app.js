    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.



    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    // console.log(arrayOfTodos[0].title)
    // console.log(arrayOfTodos[1].userId)
    // console.log(arrayOfTodos)

    // console.log(listItem)
    // console.log("is this OL" + OL)
    // console.log(toDo)
    
    function createLi(data) {
        const listItem = document.createElement("li")
        let OL = document.getElementById("todo-list")
        console.log(data)
        const text = document.createTextNode(data)
        listItem.appendChild(text)
        console.log("listItem" + listItem)
        OL.appendChild(listItem)
    }

    const populateTodos = () => {
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const toDo = arrayOfTodos[index];
            console.log(toDo.userId)
            createLi(toDo.title,)
        }
        }

    

    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)

    }
    
    
      
    
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
   


    // console.log(createLi())

    // const populateTodos = () => {
    
    // }