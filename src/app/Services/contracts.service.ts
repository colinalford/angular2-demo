import { Injectable } from '@angular/core';
import { Contract } from '../Models/contract';
import { Contracts } from '../data';

@Injectable()
export class ContractsService {
    getContracts(): Contract[] {
        return Contracts;
    }
}