export const useLocalStorage=(key,initialValue)=>{
    const [value,setValue]=useState(()=>{
        try{
            const storedValue=localStorage.getItem(key);
            return storedValue?JSON.parse(storedValue):initialValue
        }
       catch(e){
        console.log("Error reading local storage",e);
        return initialValue;
       }
    })
    const setStoredValue=(newValue)=>{
        try{
                   const valueToStore=newValue instanceof Function?newValue(value):newValue;
                   setValue(valueToStore);
                   localStorage.setItem(key,JSON.stringify(valueToStore))
        }
        catch(e)
        {
            console.error("Error setting local storage",e)
        }
    }

    return [value,setStoredValue]
}