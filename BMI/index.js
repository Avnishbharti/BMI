const bmi_res=document.getElementsByClassName('bmi_result')[0]
const bmi_cat=document.getElementsByClassName('bmi_cata')[0]
const calculate_butt=document.getElementsByClassName('calculate')[0]
const calculateBmi=()=>{
    const age=Number(document.getElementsByClassName('age')[0].value);
    const height=Number(document.getElementsByClassName('height')[0].value);
    const weight=Number(document.getElementsByClassName('weight')[0].value);
    if(age>=2 && age<=120){
        if(weight === NaN){
            bmi_cat.innerHTML="please enter a positive number"
        }else{
            const result=weight/(height * height);
      bmi_res.innerHTML=result;
    
     if(result<16){
        bmi_cat.innerHTML="severe thinness"
     }
     else if(result>16 && result<=17){
        bmi_cat.innerHTML="Moderate thinness"
     }
     else if(result>=17 && result <=18.5){
        bmi_cat.innerHTML="Mild thinness"
     }
     else if(result>=18.5 && result <=25){
        bmi_cat.innerHTML="Normal";
     }
     else if(result >=25 && result <=30 ){
        bmi_cat.innerHTML="over weight"
     }   else if(result >=30 && result <=35 ){
        bmi_cat.innerHTML="obese class I "
     }
     else if(result >=35 && result <=40 ){
        bmi_cat.innerHTML="obese class II "
     }
     else if(result>40) {
        bmi_cat.innerHTML="obese class III"
     }
     }
    }else{
        bmi_cat.innerHTML="please provide an age between 2 and 120"
    }

}
calculate_butt.addEventListener('click',calculateBmi);
