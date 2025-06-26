//element.store.ts

import { PeriodicElement } from "../model/elements.model"
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'; 
import { PeriodicElementService } from "../services/element.service";
import { inject } from "@angular/core";


//{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}

type PeriodicElementState = {
    elements: PeriodicElement[];
    loading: boolean;
    filter: 'all';
}

//the initial state
const initialState: PeriodicElementState = {
    elements: [],
    loading: false,
    filter: "all"
}

export const PeriodicElementStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods(
        (store, elementService = inject(PeriodicElementService)) => ({
            //loading all the periodic elements 
            async loadAll() {
                patchState(store, {loading: true});                    //setting the loading
                const elements = await elementService.getElement();    //the data
                patchState(store, {elements, loading: false});         //unsetting the loading 

            },

            //update element by its 'id' (position)
            async updateElement(updated: PeriodicElement){
                elementService.updateElement(updated);
                patchState(store, (state) => ({
                    elements: state.elements.map( element =>                 //serching for correct element
                        element.position == updated.position ? updated : element //update when found
                    )
                }))
            }
        })
    )
);
