import Header from './components/Header'
import AdminForm from './components/AdminForm'
 

const EventCreation = () => {
  return (
   
       <div className= "bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),] bg-cover bg-center h-screen flex flex-col">
           <Header />
           <div >
           <AdminForm />
           </div>
        </div>
    
  )
}

export default EventCreation