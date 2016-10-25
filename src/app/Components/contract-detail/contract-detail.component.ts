import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contract } from '../../Models/contract';
import { ContractsService } from '../../Services/contracts.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css'],
  providers: [ContractsService]
})
export class ContractDetailComponent implements OnInit {

  subscription: any;
  contract: Contract;
  notFound: boolean;
  
  constructor(private router: Router, private route: ActivatedRoute, private contractsService: ContractsService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe( params => {
      let id = Number.parseInt(params['id']);
      this.getContract(id);
      if (!this.contract) {
        this.router.navigate(['']);
      }
    });
  }

  getContract(id) {
    let contracts = this.contractsService.getContracts();
    this.contract = contracts[id - 1] || null;
  }

}
