//element.service.ts

import { Injectable } from "@angular/core";
import {ELEMENT_DATA} from "../model/data";
import { PeriodicElement } from "../model/elements.model";

@Injectable({
    providedIn: "root"
})

export class PeriodicElementService {
    async getElement(){
        await sleep (1000);
        return ELEMENT_DATA;
    }

    async updateElement(updated: PeriodicElement){
        await sleep(500);
    }

}

//setting delay for loading the data (in miliseconds)
async function sleep(ms:number) {
    return new Promise(
        resolve => setTimeout(resolve, ms));
}