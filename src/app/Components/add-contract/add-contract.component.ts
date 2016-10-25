import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  addContractForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.addContractForm = this.formBuilder.group({
      description: '',
      solicitation: '',
      agency: '',
      office: '',
      location: '',
      synopsis: ''
    });
    this.router = router;
  }

  ngOnInit() {

  }

  addContract(formValues) {
    console.log(formValues);
    this.router.navigate(['']);
  }

}
