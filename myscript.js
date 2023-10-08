const calculateTemp = () =>{

    const NumberTemp = document.getElementById('temp').value;
    // console.log(NumberTemp);

    const tempSelected = document.getElementById('tempdef');

   const valueTemp = tempdef.options[tempSelected.selectedIndex].value;
   console.log(valueTemp);


    
   const CelToFeh = (cel) => {
        let fahrenheit =  Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }


    const fehToCel = (feh) =>{
        let celsius = Math.round((feh - 32) * 5/9);
        return celsius;

    }
    
   let result;


   if (valueTemp == 'cel') {
    result = CelToFeh(NumberTemp)
    document.getElementById('ResultContainer').innerHTML = `=  ${result}°C Fahrenheit`;
    
   }


   else{
        result = fehToCel(NumberTemp)
        document.getElementById('ResultContainer').innerHTML = `=  ${result}°C Celsius`;
    }


}
