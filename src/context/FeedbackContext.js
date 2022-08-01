import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) =>
{
const [feedbackEdit, setFeedbackEdit] = useState([{
    item: {},
    edit: false
}])

const [feedback, setFeedback] = useState([
    
    {

    id: 1,
    text: 'This is from the context 1',
    rating: 10

    },

    {

    id: 2,
    text: 'This is from the context 2',
    rating: 9
    
    },

    {

    id: 3,
    text: 'This is from the context 3',
    rating: 8
        
    }

]
    )


const addFeedback = element => 
    {
      element.id=uuidv4();
      setFeedback( [element, ...feedback])
    }



    const updFeedback = (id, updFeedback) =>
{
setFeedback(
    feedback.map((item) => (item.id===id)?{...item,...updFeedback}:item)
)
}


const deleteFeedback = (id) =>
{
  console.log(id);
if (window.confirm("Are you sure that you want to delete this feedback?"))
{ 
  setFeedback(feedback.filter((item)=> item.id !== id ))
}
}

const editFeedback = (item) => 
{
    setFeedbackEdit({
        item,
        edit: true
    })
}
return <FeedbackContext.Provider value={
   { 
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updFeedback
}
}>
    {children}
</FeedbackContext.Provider>
}


export default FeedbackContext;