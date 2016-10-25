import { Component, OnInit } from '@angular/core';
import { Contract } from '../../Models/contract';
import { ContractsService } from '../../Services/contracts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css'],
  providers: [ContractsService]
})

export class ContractsComponent implements OnInit {

  contracts: Contract[] = null;
  title: String = 'Contracts';

  constructor(private contractsService: ContractsService, private router: Router) { }

  ngOnInit() {
    this.getContracts();
  }

  getContracts(): void {
    this.contracts = this.contractsService.getContracts();
  }

  viewContract(contractId): void {
    this.router.navigateByUrl('/contract/' + contractId);
  }

}
