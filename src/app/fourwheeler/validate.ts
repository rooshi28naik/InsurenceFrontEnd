import { isEmptyExpression } from '@angular/compiler';

export class Validate{
    validateLicence( license){
        if(license== null)
        return true;
        else {return false;}

    }
    
    validateCar(car){
        if(car==null)
        return true;
        else return false;
    }

    validateModel(model){

    }
    
    validateDate(date){
        if(date){
            alert(date)
        return true;
    }else{return false;}

    }
    validateEngine( engineNo){
        if(engineNo== null)
        return true;
        else{ return false;}

    }
    validateChasisNumber( chassisNumber){
        if(chassisNumber== null)
        return true;
        else {return false;}

    }

}