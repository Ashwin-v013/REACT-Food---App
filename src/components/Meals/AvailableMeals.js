import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';



const AvailableMeals = () => {

  const [meals, setmeals] = useState([]);
  const[isloading , setisloading] =useState(true)
  const [httperror , sethttperror] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      try{
      setisloading(true)
      const response = await fetch('https://react-http-1f8b2-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
     setmeals(loadedMeals);
     setisloading(false)
    }catch(error){
      setisloading(false);
      sethttperror(error.message)
    }
    }
  
    
      // fetchMeals().catch(error =>{
      //   setisloading(false);
      //   sethttperror(error.message)
      // });
    
      
  fetchMeals()
    
  }, []);

   if(isloading){
     return(
       <section className={classes.mealsloading}>
       <p>Loading.....</p>
       </section>
     )
   }

   if(httperror){
     return( <section className={classes.mealserror}>
      <p>something went wrong</p>
      </section>

     )
   }

    const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
   
         <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
