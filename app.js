    

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
    
   
    let filterBy = document.getElementById('filterBy')

    let OL = document.getElementById("todo-list")

    todo = ""

    const filterTodos = () => {
        // clear the previous li of the todo list
       var node= document.getElementById("todo-list");
        node.querySelectorAll('*').forEach(n => n.remove());
        //console.log('filterBy:', filterBy.value)
        let filteredTodos = arrayOfTodos.filter(todo => {
            //console.log('todo:', todo)
            return todo.userId == filterBy.value
            
        })
        console.log('filteredTodos:', filteredTodos)
        // above is the filtered todo list
        // now I want them to be sent to the createLi function to be printed out
        // !!!!!!!!!!!!!!!!!!!!!SOMEHOW!!!!!!!!!!!!!!!!!!
        // got it, I had to loop thru the array so it could print out each block
        for (let index = 0; index < filteredTodos.length; index++) {
            const todo = filteredTodos[index];
            console.log(todo.userId)
            createLi(todo.title,)
        }
        
    }

    function createLi(data) {
        
        const listItem = document.createElement("li")
        
        console.log(data)
        const text = document.createTextNode(data)
        listItem.appendChild(text)
       
        
        OL.appendChild(listItem)
        
    }

    const populateTodos = () => {
         // clear the previous li of the todo list
        var node= document.getElementById("todo-list");
        node.querySelectorAll('*').forEach(n => n.remove());
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const todo = arrayOfTodos[index];
            console.log(todo.userId)
            createLi(todo.title,)
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
    
   


    