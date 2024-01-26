import { FormGroup,FormControl } from "@angular/forms";

export default class ValidateForm  {

  static validateAllFormFields(formGroup:FormGroup){

    Object.keys(formGroup.controls).forEach((field)=>{
      console.log(field);
    const control = formGroup.get(field);
    if(control instanceof FormControl){
    control.markAsTouched();
    }else if(control instanceof FormGroup){
      this.validateAllFormFields(control);
    }
    })
  }

}